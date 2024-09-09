import React, { useState } from 'react';
import axios from 'axios';
import styles from './ChatBot.module.css';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageSend = async () => {
    if (!input) return;

    const newMessage = { role: 'user', content: input };
    setMessages([...messages, newMessage]);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4', // or 'gpt-3.5-turbo', depending on your needs
          messages: [...messages, newMessage],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = {
        role: 'assistant',
        content: response.data.choices[0].message.content,
      };

      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className={styles.chatBotContainer}>
      <button className={styles.chatBotButton} onClick={toggleChat}>
        <i className="fas fa-comments"></i>
      </button>

      {isOpen && (
        <div className={styles.chatBotWindow}>
          <div className={styles.chatHeader}>
            <span>ChatBot</span>
            <button onClick={toggleChat} className={styles.closeButton}>
              X
            </button>
          </div>
          <div className={styles.chatBody}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === 'user' ? styles.userMessage : styles.botMessage
                }
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className={styles.chatInput}
            />
            <button onClick={handleMessageSend} className={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
