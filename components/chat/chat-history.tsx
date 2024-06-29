"use client";
import useChatStore from '../../app/stores/chatStore';
import { useEffect, useRef } from "react";

export function ChatHistory() {
    const chatHistory = useChatStore((state) => state.chatHistory);
    const chatContainerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, [chatHistory]);
  
    return (
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-5 custom-scrollbar">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`${chat.type === 'user' ? 'text-white bg-blue-500' : 'bg-gray-300 text-black'} p-5 rounded-lg max-w-xs break-words`}>
              {chat.text}
            </div>
          </div>
        ))}
      </div>
    );
  }