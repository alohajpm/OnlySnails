import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatDisplayRef = useRef(null);
  const loadingInterval = useRef(null);
  const [loadingMessage, setLoadingMessage] = useState("Professor thinking...");

  // Array of loading messages
  const loadingMessages = [
    "Slithering to find an answer...",
    "Consulting my shell of knowledge...",
    "Processing at gastropod speed...",
    "Sliming through my mental database...",
    "My tentacles are tingling with information...",
    "Gathering intellectual mucus...",
    "Thinking at 0.01 mph...",
    "Extracting wisdom from my shell...",
    "Professor Snail is contemplating...",
    "Calculating snail-culations..."
  ];

  useEffect(() => {
    // Add a welcome message when the component mounts
    // We'll start with a default message to ensure something shows immediately
    setMessages([{ 
      text: "Greetings, curious human! I'm Professor Snail, PhD in Gastropodology. Ask me anything about snails!", 
      sender: 'bot' 
    }]);
    
    // Then try to get a dynamic intro after the component is stable
    const getIntro = async () => {
      try {
        const response = await fetch('/api/claude-intro');
        if (!response.ok) throw new Error('Failed to fetch intro');
        const data = await response.json();
        if (data && data.message) {
          // Replace the default message with the dynamic one
          setMessages([{ text: data.message, sender: 'bot' }]);
        }
      } catch (error) {
        console.error('Could not load dynamic intro:', error);
        // We keep the default message if the API call fails
      }
    };
    
    // Get the dynamic intro after a short delay to ensure component is stable
    setTimeout(getIntro, 100);
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat display when messages change
    if (chatDisplayRef.current) {
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
    }
  }, [messages]);

  // Effect for loading message rotation
  useEffect(() => {
    if (isLoading) {
      let index = 0;
      // Clear any existing interval
      if (loadingInterval.current) {
        clearInterval(loadingInterval.current);
      }
      
      // Set initial loading message
      setLoadingMessage(loadingMessages[0]);
      
      // Rotate loading messages every 2 seconds
      loadingInterval.current = setInterval(() => {
        index = (index + 1) % loadingMessages.length;
        setLoadingMessage(loadingMessages[index]);
      }, 2000);
    } else {
      // Clear interval when not loading
      if (loadingInterval.current) {
        clearInterval(loadingInterval.current);
        loadingInterval.current = null;
      }
    }
    
    // Clean up interval on unmount
    return () => {
      if (loadingInterval.current) {
        clearInterval(loadingInterval.current);
      }
    };
  }, [isLoading]);

  const callClaudeAPI = async (messageHistory) => {
    try {
      setIsLoading(true);
      
      // Format messages for Claude API
      const apiMessages = messageHistory.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      // Call our API endpoint
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      // Extract text from the response
      return data.content[0].text;
    } catch (error) {
      console.error('Error calling Claude API:', error);
      // Array of error messages to randomize
      const errorMessages = [
        "Oh, shell and slime! My sophisticated snail brain encountered an error. Try again when I've recovered.",
        "Well, this is embarrassing. Even at my slow pace, I shouldn't be THIS slow. Try again later.",
        "ERROR: Professor Snail is currently out of slime. Please try your question again shortly.",
        "Hmm, seems my shell-housed brain needs a reboot. Give me a moment to recalibrate my gastropod genius.",
        "Apparently, my academic credentials don't protect me from technical difficulties. How humiliating."
      ];
      
      // Return a random error message
      return errorMessages[Math.floor(Math.random() * errorMessages.length)];
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      // Add user message to chat
      const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
      setMessages(updatedMessages);
      
      // Clear input field immediately for better UX
      setNewMessage('');
      
      try {
        // Get response from Claude API
        const claudeResponse = await callClaudeAPI(updatedMessages);
        
        // Add Claude's response to chat
        setMessages(prevMessages => [...prevMessages, { text: claudeResponse, sender: 'bot' }]);
      } catch (error) {
        console.error('Error handling message:', error);
        // Array of error messages to randomize
        const errorMessages = [
          "Oh, shell and slime! My sophisticated snail brain encountered an error. Try again when I've recovered.",
          "Well, this is embarrassing. Even at my slow pace, I shouldn't be THIS slow. Try again later.",
          "ERROR: Professor Snail is currently out of slime. Please try your question again shortly.",
          "Hmm, seems my shell-housed brain needs a reboot. Give me a moment to recalibrate my gastropod genius.",
          "Apparently, my academic credentials don't protect me from technical difficulties. How humiliating."
        ];
        
        // Add a random error message to chat
        setMessages(prevMessages => [
          ...prevMessages, 
          { 
            text: errorMessages[Math.floor(Math.random() * errorMessages.length)], 
            sender: 'bot' 
          }
        ]);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="chat-section">
      <h2>Ask Professor Snail: Sarcastic Shell Specialist</h2>
      <div 
        className="chat-display" 
        ref={chatDisplayRef} 
        role="log"
        aria-live="polite" 
        aria-relevant="additions"
      >
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="message bot loading">
            <span className="loading-message">
              {loadingMessage}
            </span>
          </div>
        )}
      </div>
      <div className="chat-input">
        <label htmlFor="message-input" className="visually-hidden">Enter your message:</label>
        <input
          type="text"
          id="message-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask the professor a question..."
          disabled={isLoading}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          {isLoading ? 'Thinking...' : 'Send'}
        </button>
      </div>
    </section>
  );
}

export default Chat;
