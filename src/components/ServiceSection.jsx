import { FaMusic, FaHandshake, FaBullhorn, FaChalkboardTeacher, FaBuilding, FaComments } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';



export const ServiceSection = ()=>{
  const { t } = useTranslation();
  
  
  const services = [
    {
      icon: <FaChalkboardTeacher className="text-2xl text-red-500" />,
      title: t("first-service-title"),
      items: [
        t("first-service-one"),
        t("first-service-two"),
        t("first-service-three")
      ],
    },
    {
      icon: <FaMusic className="text-2xl text-red-500" />,
      title: t("second-service-title"),
      items: [
          t("second-service-one"),
        t("second-service-two"),
        t("second-service-three")
      ],
    },
    {
      icon: <FaHandshake className="text-2xl text-red-500" />,
      title: t("third-service-title"),
      items: [
          t("third-service-one"),
        t("third-service-two"),
        t("third-service-three")
      ],
    },
    {
      icon: <FaComments className="text-2xl text-red-500" />,
      title: t("forth-service-title"),
      items: [
          t("forth-service-one"),
        t("forth-service-two"),
        t("forth-service-three")
      ],
    },
    {
      icon: <FaBuilding className="text-2xl text-red-500" />,
      title: t("fifth-service-title"),
      items: [
          t("fifth-service-one"),
        t("fifth-service-two"),
        t("fifth-service-three")
      ],
    },
    {
      icon: <FaBullhorn className="text-2xl text-red-500" />,
      title: t("sixth-service-title"),
      items: [
          t("sixth-service-one"),
        t("sixth-service-two"),
        t("sixth-service-three")
      ],
    },
  ];

    return (
    <section className="py-10 px-4 pt-[170px] md:pt-[88px] md:px-10 lg:px-20 bg-white" >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          {t("services-title")}
        </h2>
        <p className="text-gray-600 mb-10 text-sm md:text-base max-w-2xl mx-auto">
          {t("services-text")}
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-5 text-left shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center mb-3">
                {service.icon}
                <h3 className="ml-2 font-semibold text-lg">{service.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div id="about"></div>
    </section>
  );

}