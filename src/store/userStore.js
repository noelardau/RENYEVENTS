import {create} from 'zustand';


export const useUserStore = create((set) => ({
    isConnected: true,
    setIsConnected: (status) => set({ isConnected: status }),
}));    