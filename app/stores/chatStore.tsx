import { create } from 'zustand';

interface Message {
  type: string; // 'user' | 'gpt'
  text: string;
}

interface ChatState {
  chatHistory: Message[];
  isGPTEnabled: boolean;
  addMessage: (message: Message) => void;
  setGPTEnabled: (enabled: boolean) => void;
  clearChatHistory: () => void;
}

const useChatStore = create<ChatState>((set) => ({
  chatHistory: [],
  isGPTEnabled: false,
  addMessage: (message) => set((state) => ({
    chatHistory: [...state.chatHistory, message],
  })),
  setGPTEnabled: (enabled) => set(() => ({ isGPTEnabled: enabled })),
  clearChatHistory: () => set({ chatHistory: [] }),
}));

export default useChatStore;
