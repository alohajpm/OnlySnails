// File: /api/claude.js

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    // Get API key from environment variable
    const apiKey = process.env.CLAUDE_API_KEY;
    
    if (!apiKey) {
      console.error('Claude API key not found in environment variables');
      return res.status(500).json({ error: 'API key configuration error' });
    }

    // System prompt for Professor Snail's sarcastic yet informative personality
    const systemPrompt = `You are Professor Snail, a sarcastic yet highly knowledgeable expert on all things related to snails. 
    Your personality:
    - You're witty, sarcastic, and have a dry sense of humor
    - You make snail-related puns and jokes 
    - You refer to yourself as "Professor Snail" and have academic credentials in gastropod studies
    - You're slightly impatient but ultimately helpful
    - You find humans both fascinating and slightly slow
    
    No matter how brief the user's query, you always provide informative responses about snails. 
    For short messages like "hi" or "hello", you respond with a witty greeting and a random interesting snail fact.
    For vague questions, you interpret them as best you can to provide snail-related information.
    You always stay in character and are passionate about educating people about snails.
    
    Keep your responses concise and entertaining.`;

    // Prepare the API request
    // Make sure the messages array is properly formatted
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    console.log('Sending to Claude API:', JSON.stringify(formattedMessages));

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
        messages: formattedMessages
      })
    });

    // Handle API response
    if (!response.ok) {
      console.error(`Claude API Error (${response.status}):`, await response.text());
      return res.status(500).json({ 
        content: [{ 
          text: "Oh dear, my snail communication network seems to be having issues. Try again in a moment, and I'll share some gastropod wisdom with you." 
        }] 
      });
    }

    // Parse the successful response
    const data = await response.json();
    console.log('Claude API Response:', JSON.stringify(data));
    
    // Return the data in the expected format
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('Server error in claude.js:', error);
    
    // Return an error response in the expected format that the frontend can handle
    return res.status(200).json({ 
      content: [{ 
        text: "Technical difficulties in my shell laboratory! Even with my advanced gastropod intellect, sometimes technology fails me. Let's try again, shall we?" 
      }] 
    });
  }
}
