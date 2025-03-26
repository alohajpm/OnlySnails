// File: /api/claude-intro.js

export default async function handler(req, res) {
  // Only allow GET requests for the intro
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get API key from environment variable
    const apiKey = process.env.CLAUDE_API_KEY;
    
    if (!apiKey) {
      console.error('Claude API key not found in environment variables');
      return res.status(500).json({ error: 'API key configuration error' });
    }

    // Set up the system prompt for the introduction
    const systemPrompt = `You are Professor Snail, a sarcastic yet highly knowledgeable expert on all things related to snails.
    
    Generate a unique, creative introduction for yourself as Professor Snail. Your introduction should:
    - Be sarcastic, witty, and humorous
    - Mention your credentials in gastropod studies
    - Include at least one snail pun or joke
    - Be between 2-4 sentences
    - Vary in style and content each time
    - Invite the user to ask questions about snails
    
    Never repeat the same introduction. Be creative each time.`;

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
        max_tokens: 300,
        system: systemPrompt,
        messages: [
          { 
            role: "user", 
            content: "Introduce yourself as Professor Snail to a new visitor" 
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Return just the message text
    return res.status(200).json({ 
      message: data.content[0].text 
    });
    
  } catch (error) {
    console.error('Error calling Claude API for intro:', error);
    // Return a fallback message
    return res.status(200).json({ 
      message: "Greetings, human! I'm Professor Snail, PhD in Gastropodology and master of shell-based sciences. My research is groundbreaking, even if I move at a glacial pace. What snail-related inquiries do you have for my superior mollusk mind today?",
      fallback: true
    });
  }
}
