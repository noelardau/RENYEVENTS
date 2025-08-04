import { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import heroImage from  "../assets/images/heroSectionImage.jpg" 


export const FuturEvent = () => {
  const carouselRef = useRef(null);
  const events = [
    {
      title: "Foire de Pâques",
      date: "17-18 AVR 2025",
      description: "Dans l'enceinte de la Miroir & Sanifer - Stands disponibles",
      image: heroImage,
    },
    // Add more events as needed
    {
      title: "Event 2",
      date: "25-26 MAY 2025",
      description: "Another exciting event coming soon!",
      image: "https://via.placeholder.com/300x400",
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const interval = setInterval(() => {
        carousel.next();
      }, 5000); // Auto-scroll every 5 seconds
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="container mx-auto py-10" id="service">
      <h2 className="text-2xl font-bold text-center mb-4">Les événements à venir</h2>
      <p className="text-center text-gray-600 mb-6">Découvrez des événements qui peuvent vous intéresser</p>
      <Carousel
        ref={carouselRef}
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        interval={5000}
        className="w-full max-w-4xl mx-auto"
      >
        {events.map((event, index) => (
          <div key={index} className="p-4">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p>{event.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Voir détails</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
