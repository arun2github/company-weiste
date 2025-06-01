"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperAirplaneIcon, XMarkIcon, ChatBubbleOvalLeftEllipsisIcon, SparklesIcon } from '@heroicons/react/24/solid'; // Using solid for more presence

// --- Theme Colors (Consistent with Elegant Tech Minimalism) ---
const ACCENT_COLOR = '#004D40'; // Deep Teal
const BG_WINDOW = '#FFFFFF'; // Chat window background
const BG_INPUT = '#F0F0F0'; // Slightly off-white for input area
const TEXT_PRIMARY = '#222222';
const TEXT_SECONDARY = '#555555';
const USER_BUBBLE_BG = '#E6F3F1'; // Light teal for user messages
const AI_BUBBLE_BG = '#F9F9F9';   // Very light gray for AI, could also be white with border
const BORDER_COLOR = '#E0E0E0';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  
  // Effect to add a greeting message from AI when chat opens for the first time or is empty
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: "Hello! I&apos;m WhaleCore&apos;s AI assistant. How can I help you today?",
          timestamp: new Date(),
        }
      ]);
    }
  }, [isOpen, messages.length]);


  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const newUserMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);
    scrollToBottom(); // Scroll after adding user message

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, newUserMessage].map(m => ({role: m.role, content: m.content})) // Send history
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response from AI');
      }

      const data = await response.json();
      const aiResponse: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: data.reply,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: error instanceof Error ? error.message : "Sorry, I'm having trouble connecting. Please try again later.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      scrollToBottom(); // Scroll after AI response or error
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent newline in input
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Launcher Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{ backgroundColor: ACCENT_COLOR, color: 'white' }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0,77,64,0.5)" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Chat"
      >
        {isOpen ? <XMarkIcon className="w-7 h-7" /> : <ChatBubbleOvalLeftEllipsisIcon className="w-7 h-7" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="fixed bottom-24 right-6 z-40 w-[calc(100vw-48px)] max-w-md h-[70vh] max-h-[600px] rounded-xl shadow-2xl flex flex-col overflow-hidden border"
            style={{ backgroundColor: BG_WINDOW, borderColor: BORDER_COLOR }}
          >
            {/* Header */}
            <header 
              className="p-4 flex items-center justify-between shrink-0"
              style={{borderBottom: `1px solid ${BORDER_COLOR}`, backgroundColor: '#FBFBFB'}} // Slightly off-white header
            >
              <div className="flex items-center">
                <SparklesIcon className="w-6 h-6 mr-2.5" style={{ color: ACCENT_COLOR }} />
                <h3 className="text-lg font-semibold" style={{ color: TEXT_PRIMARY }}>WhaleCore AI</h3>
              </div>
              <button onClick={toggleChat} className="p-1 rounded-full hover:bg-gray-200/70" aria-label="Close chat">
                <XMarkIcon className="w-5 h-5" style={{ color: TEXT_SECONDARY }} />
              </button>
            </header>

            {/* Messages Area */}
            <div className="flex-grow p-4 space-y-3 overflow-y-auto scroll-smooth">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl shadow-sm break-words text-sm`}
                    style={{
                      backgroundColor: msg.role === 'user' ? USER_BUBBLE_BG : AI_BUBBLE_BG,
                      color: TEXT_PRIMARY,
                      borderTopLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
                      borderTopRightRadius: msg.role === 'user' ? '4px' : '16px',
                    }}
                  >
                    <p>{msg.content}</p>
                    <p className="text-xs mt-1.5 opacity-60 text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div 
                    className="max-w-[75%] p-3 rounded-2xl shadow-sm text-sm"
                    style={{ backgroundColor: AI_BUBBLE_BG, color: TEXT_PRIMARY, borderTopLeftRadius: '4px'}}
                  >
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} /> {/* For auto-scrolling */}
            </div>

            {/* Input Area */}
            <div 
              className="p-3 shrink-0" 
              style={{borderTop: `1px solid ${BORDER_COLOR}`, backgroundColor: BG_INPUT}}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask something..."
                  className="flex-grow px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-teal-700 transition-shadow text-sm"
                  style={{ 
                    backgroundColor: BG_WINDOW, 
                    borderColor: BORDER_COLOR, 
                    color: TEXT_PRIMARY,
                  }}
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || inputValue.trim() === ''}
                  className="p-3 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-teal-700"
                  style={{ 
                    backgroundColor: ACCENT_COLOR, 
                    color: 'white',
                  }}
                  aria-label="Send message"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 