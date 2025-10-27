import {create} from 'zustand';


export const useUserStore = create((set) => ({
    isConnected: false,
    setIsConnected: (status) => set({ isConnected: status }),
}));    