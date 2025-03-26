import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatDisplayRef = useRef(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { 
          text: "Hello! I'm Claude, your snail expert. Ask me anything about snails, their biology, care, or interesting facts!", 
          sender: 'bot' 
        }
      ]);
    }
  }, []);

  useEffect(() => {
    if (chatDisplayRef.current) {
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
    }
  }, [messages]);

  const callClaudeAPI = async (messageHistory) => {
    try {
      setIsLoading(true);
      
      // Format messages for Claude API
      const apiMessages = messageHistory.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      // Call our own API endpoint instead of Claude API directly
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
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      // Extract text from the response
      return data.content[0].text;
    } catch (error) {
      console.error('Error calling Claude API:', error);
      return 'Sorry, I encountered an error while processing your request about snails. Please try again later.';
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
        // Add error message to chat
        setMessages(prevMessages => [
          ...prevMessages, 
          { 
            text: 'Sorry, I encountered an error while processing your request about snails. Please try again later.', 
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
      <h2>Snail Chat: Ask Us Anything About Snails!</h2>
      <div className="chat-display" ref={chatDisplayRef} aria-live="polite">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="message bot loading">
            <span className="loading-dots">
              <span>.</span><span>.</span><span>.</span>
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
          placeholder="Ask a question about snails..."
          disabled={isLoading}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </section>
  );
}

export default Chat;
