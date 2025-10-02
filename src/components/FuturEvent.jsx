import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';


export const FuturEvent = ({events}) => {
  
  const { t } = useTranslation();

  return (
    <section className="bg-white md:py-14 py:22 z-0" >
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">{t("futur-event")}</h2>
        <p className="text-sm text-gray-500">
          {t("text-futur-event")}
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          className="rounded-lg shadow-lg z-0"
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
