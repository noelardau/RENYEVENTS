import { create } from 'zustand';
import { persist } from 'zustand/middleware';


// Persist the user store in localStorage under the key 'renyevents-user'
export const useUserStore = create(
    persist(
        (set) => ({
            isConnected: false,
            events: [],
            setIsConnected: (status) => set({ isConnected: status }),
            addEvents: (newEvents) =>
                set((state) => ({ events: [...state.events, ...newEvents] })),

            removeEventById: (eventId) =>
                set((state) => ({ events: state.events.filter((event) => event.id !== eventId) })),
        }),
        {
            name: 'renyevents-user', // key in localStorage
            // optionally, only persist specific parts of the state
            // partialize: (state) => ({ isConnected: state.isConnected, events: state.events }),
        }
    )
);