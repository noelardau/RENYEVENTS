import {create} from 'zustand';


export const useEventStore = create((set) => ({
   
    events: [
        {id: 1, titre: "Concert de Jazz", date_debut: "2024-07-15", lieu: "Salle des Fêtes", image: "jazz_concert.jpg", description:"lorem ipsum dolor si amet bkjdflmqkc 1"},
        {id: 2, titre: "Exposition d'Art", date_debut: "2024-08-01", lieu: "Galerie d'Art", image: "art_exhibition.jpg", description:"lorem ipsum dolor si amet bkjdflmqkc 2"},
        {id: 3, titre: "Conférence Tech", date_debut: "2024-09-10", lieu: "Centre de Conférences", image: "tech_conference.jpg", description:"lorem ipsum dolor si amet bkjdflmqkc 3"},
    ],
    
    addEvent: (newEvent) => set((state) => ({ events: [...state.events, newEvent] })),

    updateEventById: (eventId, updates) => set((state) => ({
        events: state.events.map(ev => ev.id === eventId ? { ...ev, ...updates } : ev)
    })),

    removeEventById: (eventId) => set((state) => ({ events: state.events.filter(event => event.id !== eventId) })), 

}));    