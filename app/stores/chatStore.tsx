// app/store/chatStore.tsx
import { create } from 'zustand';

interface Message {
  type: string;
  text: string;
}

interface ChatState {
  chatHistory: Message[];
  addMessage: (message: Message) => void;
  clearChatHistory: () => void;
}

const useChatStore = create<ChatState>((set) => ({
  chatHistory: [],
  addMessage: (message) => set((state) => ({
    chatHistory: [...state.chatHistory, message],
  })),
  clearChatHistory: () => set({ chatHistory: [] }),
}));

export default useChatStore;
