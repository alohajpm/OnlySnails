import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';

// Try to import user avatar with fallback
let userAvatarImg;
try {
  userAvatarImg = require('./images/user-avatar.png');
} catch (e) {
  // Generic user silhouette as fallback
  userAvatarImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23BBB' /%3E%3Ccircle cx='50' cy='40' r='15' fill='%23888' /%3E%3Cpath d='M25,85 C25,65 75,65 75,85' fill='%23888' /%3E%3C/svg%3E";
  console.warn("Couldn't load user avatar image, using placeholder");
}

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userAvatar, setUserAvatar] = useState(userAvatarImg);
  const endOfMessagesRef = useRef(null);
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
    // Scroll to bottom whenever messages change
    scrollToBottom();
    
    // Set a default welcome message
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          content: "Greetings, curious human! I'm Professor Snail, PhD in Gastropodology. Ask me anything about snails!",
          sender: 'assistant',
          timestamp: new Date().toISOString()
        }
      ]);
      
      // Try to get a dynamic intro after the component is stable
      const getIntro = async () => {
        try {
          const response = await fetch('/api/claude-intro');
          if (!response.ok) throw new Error('Failed to fetch intro');
          const data = await response.json();
          if (data && data.message) {
            // Replace the default message with the dynamic one
            setMessages([{ 
              id: 'welcome',
              content: data.message, 
              sender: 'assistant',
              timestamp: new Date().toISOString()
            }]);
          }
        } catch (error) {
          console.error('Could not load dynamic intro:', error);
          // We keep the default message if the API call fails
        }
      };
      
      // Get the dynamic intro after a short delay to ensure component is stable
      setTimeout(getIntro, 100);
    }
  }, [messages.length]);

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
  
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const callClaudeAPI = async (messageHistory) => {
    try {
      // Format messages for Claude API
      const apiMessages = messageHistory.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.content
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
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError('');
    
    try {
      // Get all messages including the new one
      const updatedMessages = [...messages, userMessage];
      
      // Get response from Claude API
      const claudeResponse = await callClaudeAPI(updatedMessages);
      
      // Create assistant message
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        content: claudeResponse,
        sender: 'assistant',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  // Format timestamp to readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className="chat-section">
      <div className="container">
        <h2 className="section-title">Ask Professor <span className="accent">Snail</span></h2>
        
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="assistant-avatar"></div>
              <div className="assistant-info">
                <h3>Professor Snail</h3>
                <span className="status-indicator">Online</span>
              </div>
            </div>
            <p className="chat-description">Sarcastic Shell Specialist, PhD in Gastropodology</p>
          </div>
          
          <div className="chat-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender === 'user' ? 'user-message' : 'assistant-message'}`}
              >
                <div className="message-avatar">
                  {message.sender === 'user' ? (
                    <img src={userAvatar} alt="User" />
                  ) : (
                    <div className="assistant-avatar"></div>
                  )}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.content}</div>
                  <div className="message-time">{formatTime(message.timestamp)}</div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="message assistant-message">
                <div className="message-avatar">
                  <div className="assistant-avatar"></div>
                </div>
                <div className="message-content">
                  <div className="message-text loading-message">{loadingMessage}</div>
                </div>
              </div>
            )}
            
            {error && <div className="error-message">{error}</div>}
            
            <div ref={endOfMessagesRef} />
          </div>
          
          <form className="chat-input-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask the professor a question..."
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="send-button" 
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            
            <div className="chat-features">
              <button 
                type="button" 
                className="feature-button" 
                title="Upload image (coming soon)"
                disabled
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </button>
              <button 
                type="button" 
                className="feature-button" 
                title="Voice message (coming soon)"
                disabled
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </button>
            </div>
          </form>
          
          <div className="chat-footer">
            <p>Powered by Claude AI - Ask any snail-related questions!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
