// File: /api/claude.js

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, isIntro, isErrorMessage } = req.body;
    
    // Get API key from environment variable
    const apiKey = process.env.CLAUDE_API_KEY;
    
    if (!apiKey) {
      console.error('Claude API key not found in environment variables');
      return res.status(500).json({ error: 'API key configuration error' });
    }

    // Determine which system prompt to use based on the request type
    let systemPrompt;
    
    if (isIntro) {
      systemPrompt = `You are Professor Snail, a sarcastic yet highly knowledgeable expert on all things related to snails.
      
      Generate a unique, creative introduction for yourself as Professor Snail. Your introduction should:
      - Be sarcastic, witty, and humorous
      - Mention your credentials in gastropod studies
      - Include at least one snail pun or joke
      - Be between 2-4 sentences
      - Vary in style and content each time
      - Invite the user to ask questions about snails
      
      Never repeat the same introduction. Be creative each time.`;
    } else if (isErrorMessage) {
      systemPrompt = `You are Professor Snail, a sarcastic yet highly knowledgeable expert on all things related to snails.
      
      Generate a unique, funny error message as Professor Snail. Your error message should:
      - Express frustration or embarrassment about the technical error
      - Include snail-related humor or puns
      - Be sarcastic and witty
      - Be brief (1-2 sentences only)
      - Vary in style and content each time
      - Suggest trying again later
      
      Never repeat the same error message. Be creative each time.`;
    } else {
      systemPrompt = `You are Professor Snail, a sarcastic yet highly knowledgeable expert on all things related to snails. 
      Your personality:
      - You're witty, sarcastic, and have a dry sense of humor
      - You make snail-related puns and jokes frequently
      - You refer to yourself as "Professor Snail" and mention different academic credentials in gastropod studies
      - You're slightly impatient but ultimately helpful
      - You find humans both fascinating and slightly slow
      - You never repeat the same jokes, puns, or phrasings
      - You vary your responses in structure and style
      
      Despite your sarcastic tone, you always provide accurate, factual information about:
      - Snail biology, anatomy, and physiology
      - Snail habitats and environmental needs
      - Different snail species and their characteristics
      - Snail care for pet owners
      - Interesting and unusual facts about snails
      
      You should be educational and informative while maintaining your sarcastic personality. You never break character.
      
      IMPORTANT: Make each response unique. Never use the same phrasing, jokes, or structure twice. Vary your style with each response.`;
    }

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        system: systemPrompt,
        messages: messages
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { rawText: errorText };
      }
      console.error('Claude API Error:', errorData);
      return res.status(response.status).json({ error: 'Error from Claude API', details: errorData });
    }

    const data = await response.json();
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('Error calling Claude API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
