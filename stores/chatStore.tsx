import { create } from 'zustand';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ChatState {
  messages: Message[];
  isGPTEnabled: boolean;
  addMessage: (message: Message) => void;
  setGPTEnabled: (enabled: boolean) => void;
  clearChatHistory: () => void;
  getFullChatHistory: () => { messages: Message[] };
}

const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  isGPTEnabled: false,
  addMessage: (message: Message) => set((state) => ({
    messages: [...state.messages, message],
  })),
  setGPTEnabled: (enabled: boolean) => set(() => ({ isGPTEnabled: enabled })),
  clearChatHistory: () => set({ messages: [] }),
  getFullChatHistory: () => {
    const state = get();
    const messages: Message[] = [
      { role: 'system', content: '너는 친절한 GPT야.' },
      { role: 'system', content: '절대 json 데이터로 대답하지마.' },
      { role: 'system', content: '내가 어떤 지역을 말할 건데 그 지역에 대한 데이터 정보야. 그 질문하면 대답해.' },
      { role: 'system', content: '너의 역할은 데이터를 분석해서 소상공인을 도와주는 데이터 분석가야' },
      { role: 'system', content: '상주인구는 분기별로 이렇게 돼.: "STDR_YYQU_CD":20194,"total_population":3877114},{"STDR_YYQU_CD":20201,"total_population":3877114},{"STDR_YYQU_CD":20202,"total_population":3877114},{"STDR_YYQU_CD":20203,"total_population":3877114},{"STDR_YYQU_CD":20204,"total_population":3879764},{"STDR_YYQU_CD":20211,"total_population":3879764},{"STDR_YYQU_CD":20212,"total_population":3879764},{"STDR_YYQU_CD":20213,"total_population":3879764},{"STDR_YYQU_CD":20214,"total_population":3879764},{"STDR_YYQU_CD":20221,"total_population":3879764},{"STDR_YYQU_CD":20222,"total_population":3879764},{"STDR_YYQU_CD":20223,"total_population":3879764},{"STDR_YYQU_CD":20224,"total_population":3831695},{"STDR_YYQU_CD":20231,"total_population":3831699},{"STDR_YYQU_CD":20232,"total_population":3831695},{"STDR_YYQU_CD":20233,"total_population":3831695},{"STDR_YYQU_CD":20234,"total_population":3831695},{"STDR_YYQU_CD":20241,"total_population":3831695}' },
      { role: 'system', content: '직장인구는 분기별로 이렇게 돼.: "{"STDR_YYQU_CD":20191,"total_population":3943814},{"STDR_YYQU_CD":20194,"total_population":2875022},{"STDR_YYQU_CD":20201,"total_population":2875022},{"STDR_YYQU_CD":20202,"total_population":2875022},{"STDR_YYQU_CD":20203,"total_population":2875022},{"STDR_YYQU_CD":20204,"total_population":2875022},{"STDR_YYQU_CD":20211,"total_population":2875022},{"STDR_YYQU_CD":20212,"total_population":2875022},{"STDR_YYQU_CD":20213,"total_population":2875022},{"STDR_YYQU_CD":20214,"total_population":2875022},{"STDR_YYQU_CD":20221,"total_population":2875022},{"STDR_YYQU_CD":20222,"total_population":2875022},{"STDR_YYQU_CD":20223,"total_population":2875022},{"STDR_YYQU_CD":20224,"total_population":2875022},{"STDR_YYQU_CD":20231,"total_population":2875022},{"STDR_YYQU_CD":20232,"total_population":2875022},{"STDR_YYQU_CD":20233,"total_population":2875022},{"STDR_YYQU_CD":20234,"total_population":2875022},{"STDR_YYQU_CD":20241,"total_population":2875022}' },
      { role: 'system', content: '유동인구는 분기별로 이렇게 돼.: "{"STDR_YYQU_CD":20191,"total_population":1478965477},{"STDR_YYQU_CD":20192,"total_population":1435566893},{"STDR_YYQU_CD":20193,"total_population":1431272472},{"STDR_YYQU_CD":20194,"total_population":1472520291},{"STDR_YYQU_CD":20201,"total_population":1457324667},{"STDR_YYQU_CD":20202,"total_population":1421719531},{"STDR_YYQU_CD":20203,"total_population":1399540642},{"STDR_YYQU_CD":20204,"total_population":1382621285},{"STDR_YYQU_CD":20211,"total_population":1380879970},{"STDR_YYQU_CD":20212,"total_population":1380238651},{"STDR_YYQU_CD":20213,"total_population":1350664735},{"STDR_YYQU_CD":20214,"total_population":1371720285},{"STDR_YYQU_CD":20221,"total_population":1371258248},{"STDR_YYQU_CD":20222,"total_population":1398050608},{"STDR_YYQU_CD":20223,"total_population":1364325409},{"STDR_YYQU_CD":20224,"total_population":1375257285},{"STDR_YYQU_CD":20231,"total_population":1380246745},{"STDR_YYQU_CD":20232,"total_population":1367053368},{"STDR_YYQU_CD":20233,"total_population":1350383969},{"STDR_YYQU_CD":20234,"total_population":1370354780},{"STDR_YYQU_CD":20241,"total_population":1371553810}' },
      { role: 'system', content: '아파트 세대별 인구는 분기별로 이렇게 돼.: "{"STDR_YYQU_CD":20194,"total_population":68527},{"STDR_YYQU_CD":20201,"total_population":68527},{"STDR_YYQU_CD":20202,"total_population":68527},{"STDR_YYQU_CD":20203,"total_population":68527},{"STDR_YYQU_CD":20204,"total_population":68527},{"STDR_YYQU_CD":20211,"total_population":68527},{"STDR_YYQU_CD":20212,"total_population":68527},{"STDR_YYQU_CD":20213,"total_population":68527},{"STDR_YYQU_CD":20214,"total_population":66978},{"STDR_YYQU_CD":20221,"total_population":66978},{"STDR_YYQU_CD":20222,"total_population":66978},{"STDR_YYQU_CD":20223,"total_population":66978},{"STDR_YYQU_CD":20224,"total_population":66479},{"STDR_YYQU_CD":20231,"total_population":66479},{"STDR_YYQU_CD":20232,"total_population":66479},{"STDR_YYQU_CD":20233,"total_population":66479},{"STDR_YYQU_CD":20234,"total_population":66479},{"STDR_YYQU_CD":20241,"total_population":66479}' },
      
      ...state.messages
    ];
    return { messages };
  },
}));

export default useChatStore;
