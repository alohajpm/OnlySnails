import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import userAvatarImg from './images/user-avatar.png';

function Chat() {
  // Keep the original chat functionality but update the styling
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userAvatar, setUserAvatar] = useState(userAvatarImg);
  const endOfMessagesRef = useRef(null);
  
  const API_URL = 'https://api.claude.ai/v1/messages';
  
  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom();
    
    // Set a default welcome message
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          content: "Welcome to the OnlySnails Chat! Ask me anything about snails and gastropods. I'm here to help with identification, care tips, and fascinating facts about our slimy friends.",
          sender: 'assistant',
          timestamp: new Date().toISOString()
        }
      ]);
    }
  }, [messages]);
  
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
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
      // Simulate API call with a timeout since we're keeping the original functionality
      setTimeout(() => {
        const assistantMessage = {
          id: (Date.now() + 1).toString(),
          content: generateSnailResponse(input),
          sender: 'assistant',
          timestamp: new Date().toISOString()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');
      setIsLoading(false);
    }
  };
  
  // Simple response generator based on keywords
  const generateSnailResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return "Hello there! Welcome to OnlySnails chat. How can I help you with your snail questions today?";
    }
    
    if (lowerQuery.includes('food') || lowerQuery.includes('eat') || lowerQuery.includes('feeding')) {
      return "Most pet snails enjoy a diet of fresh vegetables like lettuce, cucumber, and carrots. You can also offer them fruits like apples and bananas occasionally. Make sure to wash all produce thoroughly to remove pesticides!";
    }
    
    if (lowerQuery.includes('shell') || lowerQuery.includes('broken')) {
      return "A snail's shell is vital for their health and protection. If your snail's shell is damaged, you should provide extra calcium (cuttlebone or calcium powder) in their diet. For serious cracks or breaks, consult a vet who specializes in exotic pets.";
    }
    
    if (lowerQuery.includes('breed') || lowerQuery.includes('reproduce') || lowerQuery.includes('eggs')) {
      return "Most land snails are hermaphrodites, meaning they have both male and female reproductive organs. They typically mate with another snail and both can lay eggs afterward. Snail eggs are usually laid in clusters in soil or damp, protected places. Depending on the species, they may lay anywhere from 30 to 120 eggs at a time!";
    }
    
    if (lowerQuery.includes('habitat') || lowerQuery.includes('tank') || lowerQuery.includes('terrarium')) {
      return "For a happy snail habitat, use a glass or plastic container with air holes. Add 2-3 inches of substrate (chemical-free soil or coconut coir), maintain humidity around 75-90%, and provide hiding spots like cork bark or clay pots. Include shallow water dishes, calcium sources, and regular cleaning to prevent harmful bacteria.";
    }
    
    if (lowerQuery.includes('species') || lowerQuery.includes('type') || lowerQuery.includes('identify')) {
      return "There are thousands of snail species! Popular pet species include the Giant African Land Snail (where legal), Garden snails, Grove snails, and Milk snails. For proper identification, I'd need to see a photo and details about size, shell pattern, and your location. You might also want to check our Species Guide section for more information.";
    }
    
    // Default response for any other queries
    return "That's an interesting question about snails! While I don't have specific information on that topic, I recommend checking our Snail Facts section or posting your question in our community forum for insights from experienced snail enthusiasts.";
  };
  
  // Format timestamp to readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className="chat-section">
      <div className="container">
        <h2 className="section-title">Snail <span className="accent">Chat</span></h2>
        
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="assistant-avatar"></div>
              <div className="assistant-info">
                <h3>SnailBot</h3>
                <span className="status-indicator">Online</span>
              </div>
            </div>
            <p className="chat-description">Ask me anything about snails and gastropod care!</p>
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
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
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
                placeholder="Type your message here..."
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
            <p>Note: This is a demo chat with limited responses. For full support, join our community forum.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
