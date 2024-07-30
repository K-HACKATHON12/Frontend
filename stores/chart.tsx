import create from 'zustand';

// 스토어의 상태 타입 정의
interface MarkerState {
    markerData: any | null;  // 'any' 대신 더 구체적인 타입을 사용하는 것이 좋습니다
    chartData: any[];  // 'any[]' 대신 더 구체적인 타입을 사용하는 것이 좋습니다
    setMarkerData: (data: any) => void;
    setChartData: (data: any[]) => void;
}

export const useMarkerStore = create<MarkerState>((set) => ({
    markerData: null,
    chartData: [],
    setMarkerData: (data) => set({ markerData: data }),
    setChartData: (data) => set((state) => {
        console.log('Setting chart data:', data);
        return { chartData: data };
    }),
}));