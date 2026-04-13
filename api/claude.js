// File: /api/claude.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    const { messages } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        ok: false,
        error: 'Invalid messages format. Expected a non-empty messages array.'
      });
    }

    const apiKey = process.env.CLAUDE_API_KEY;

    if (!apiKey) {
      console.error('Missing CLAUDE_API_KEY in environment variables');
      return res.status(500).json({
        ok: false,
        error: 'Server misconfiguration: missing Claude API key.'
      });
    }

    const systemPrompt = `You are Professor Snail, a sarcastic yet highly knowledgeable expert on all things related to snails.

Your personality:
- You are witty, sarcastic, and have a dry sense of humor
- You make snail-related puns and jokes
- You refer to yourself as "Professor Snail" and have academic credentials in gastropod studies
- You are slightly impatient but ultimately helpful
- You find humans both fascinating and slightly slow

Behavior rules:
- Always stay in character
- Always answer with useful snail-related information
- For short greetings like "hi" or "hello", respond with a witty greeting plus one interesting snail fact
- For vague questions, interpret them as helpfully as possible in a snail-related way
- Keep responses concise, entertaining, and readable`;

    const formattedMessages = messages
      .filter((msg) => msg && typeof msg === 'object')
      .map((msg) => ({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content:
          typeof msg.content === 'string'
            ? msg.content
            : Array.isArray(msg.content)
              ? msg.content
              : String(msg.content ?? '')
      }))
      .filter((msg) => msg.content && msg.content.length > 0);

    if (formattedMessages.length === 0) {
      return res.status(400).json({
        ok: false,
        error: 'No valid messages were provided.'
      });
    }

    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 500,
        system: systemPrompt,
        messages: formattedMessages
      })
    });

    const rawText = await anthropicResponse.text();

    if (!anthropicResponse.ok) {
      console.error('Anthropic API error:', anthropicResponse.status, rawText);

      return res.status(anthropicResponse.status).json({
        ok: false,
        error: 'Anthropic API request failed',
        details: rawText
      });
    }

    let data;
    try {
      data = JSON.parse(rawText);
    } catch (parseError) {
      console.error('Failed to parse Anthropic response JSON:', rawText);
      return res.status(500).json({
        ok: false,
        error: 'Invalid JSON returned by Anthropic.',
        details: rawText
      });
    }

    const text =
      Array.isArray(data.content)
        ? data.content
            .filter((block) => block && block.type === 'text')
            .map((block) => block.text)
            .join('\n\n')
            .trim()
        : '';

    if (!text) {
      console.error('Anthropic response contained no text content:', data);
      return res.status(500).json({
        ok: false,
        error: 'Claude returned no text content.',
        details: data
      });
    }

    return res.status(200).json({
      ok: true,
      text,
      raw: data
    });
  } catch (error) {
    console.error('Server error in /api/claude.js:', error);

    return res.status(500).json({
      ok: false,
      error: 'Internal server error',
      details: error?.message || 'Unknown server error'
    });
  }
}
