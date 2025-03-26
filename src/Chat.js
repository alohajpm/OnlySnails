import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  
  // Function to get random loading message
  const getRandomLoadingMessage = () => {
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
    
    // Rotate through loading messages
    if (loadingMessageIndex >= loadingMessages.length - 1) {
      setLoadingMessageIndex(0);
    } else {
      setLoadingMessageIndex(prevIndex => prevIndex + 1);
    }
    
    return loadingMessages[loadingMessageIndex];
  };
  const chatDisplayRef = useRef(null);

  useEffect(() => {
    if (messages.length === 0) {
      // Instead of setting a fixed message, we'll call the API for a unique intro
      setIsLoading(true);
      fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: 'Introduce yourself as Professor Snail to a new visitor' }],
          isIntro: true
        })
      })
      .then(response => response.json())
      .then(data => {
        setMessages([{ 
          text: data.content[0].text, 
          sender: 'bot' 
        }]);
      })
      .catch(error => {
        console.error('Error getting intro:', error);
        setMessages([{ 
          text: "Well, hello there! I'm Professor Snail, PhD in Gastropodology. What snail-related questions can I answer for you today?", 
          sender: 'bot' 
        }]);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          messages: apiMessages,
          name: "Professor Snail" // Pass the character name to the API
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
        console.error('API Error:', response.status, errorData);
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      // Extract text from the response
      return data.content[0].text;
    } catch (error) {
      console.error('Error calling Claude API:', error);
      // Instead of a fixed error message, let's generate a dynamic one
      try {
        // Try to get a unique error message
        const errorResponse = await fetch('/api/claude', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: 'Generate a funny error message as Professor Snail' }],
            isErrorMessage: true
          })
        });
        
        if (errorResponse.ok) {
          const errorData = await errorResponse.json();
          return errorData.content[0].text;
        }
      } catch (e) {
        console.error('Error getting custom error message:', e);
      }
      
      // Fallback if the API call for error message fails
      const errorMessages = [
        "Oh, shell and slime! My sophisticated snail brain encountered an error. Try again when I've recovered.",
        "Well, this is embarrassing. Even at my slow pace, I shouldn't be THIS slow. Try again later.",
        "ERROR: Professor Snail is currently out of slime. Please try your question again shortly.",
        "Hmm, seems my shell-housed brain needs a reboot. Give me a moment to recalibrate my gastropod genius.",
        "Apparently, my academic credentials don't protect me from technical difficulties. How humiliating."
      ];
      
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
        // Add error message to chat
        // Generate dynamic error message
        try {
          const errorResponse = await fetch('/api/claude', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messages: [{ role: 'user', content: 'Generate a funny error message as Professor Snail' }],
              isErrorMessage: true
            })
          });
          
          if (errorResponse.ok) {
            const errorData = await errorResponse.json();
            setMessages(prevMessages => [
              ...prevMessages, 
              { 
                text: errorData.content[0].text, 
                sender: 'bot' 
              }
            ]);
          } else {
            throw new Error("Couldn't get custom error message");
          }
        } catch (e) {
          console.error('Error getting custom error message:', e);
          // Fallback array of error messages
          const errorMessages = [
            "Oh, shell and slime! My sophisticated snail brain encountered an error. Try again when I've recovered.",
            "Well, this is embarrassing. Even at my slow pace, I shouldn't be THIS slow. Try again later.",
            "ERROR: Professor Snail is currently out of slime. Please try your question again shortly.",
            "Hmm, seems my shell-housed brain needs a reboot. Give me a moment to recalibrate my gastropod genius.",
            "Apparently, my academic credentials don't protect me from technical difficulties. How humiliating."
          ];
          
          setMessages(prevMessages => [
            ...prevMessages, 
            { 
              text: errorMessages[Math.floor(Math.random() * errorMessages.length)], 
              sender: 'bot' 
            }
          ]);
        }
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
        aria-atomic="false"
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
              {getRandomLoadingMessage()}
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
          {isLoading ? getRandomLoadingMessage().split('...')[0] : 'Send'}
        </button>
      </div>
    </section>
  );
}

export default Chat;
