import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ViavyJ from "../assets/images/Foire_Viavy_jejo_19à25mars2025.jpg";
import MalagasyMif from "../assets/images/Foire_Malagasy_mifety.jpg";

const events = [
  {
    id: 1,
    title: "Foire Viavy Jejo",
    date: "19-25 Mars 2025",
    image: ViavyJ,
    link: "#",
  },
  {
    id: 2,
    title: "Foire Malagasy Mifety",
    date: "23-25 Juin 2025",
    image: MalagasyMif,
    link: "#",
  },
  
];

export const FuturEvent = () => {
  return (
    <section className="bg-white py-14">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Les Événements à Venir</h2>
        <p className="text-sm text-gray-500">
          Découvrez des évènements qui peuvent vous intéresser
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          className="rounded-lg shadow-lg"
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col items-center min-h-80 pb-8" 
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain rounded-lg shadow-lg mx-auto"
              />
              <h3 className="mt-6 text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-500">{event.date}</p>
              <div className="mt-4 flex justify-center w-full">
                <a
                  href={event.link}
                  className="btn btn-outline btn-sm text-sm"
                >
                  Voir détails
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div id="service"></div>
    </section>
  );
};
