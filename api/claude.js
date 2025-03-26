// File: /api/claude.js (for Next.js projects)
// If using other frameworks, place this in the appropriate API folder

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    
    // Get API key from environment variable (server-side, so it's secure)
    const apiKey = process.env.CLAUDE_API_KEY; // Note: no NEXT_PUBLIC_ prefix needed for server-side
    
    if (!apiKey) {
      console.error('Claude API key not found in environment variables');
      return res.status(500).json({ error: 'API key configuration error' });
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
        system: 'You are a helpful assistant that specializes in snails. You know everything about snail biology, habitats, species, care, and interesting facts. Always provide informative and factual responses about snails, and relate any general questions back to snails when possible.',
        messages: messages
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
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
