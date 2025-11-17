import { useEffect, useState } from "react";
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { FuturEvent } from "../components/FuturEvent"
import { ServiceSection } from "../components/ServiceSection"
import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { FooterSection } from "../components/FooterSection"
import { list_of_event } from "../exemple_data/list_of_events";
import setSmoothScroll from "../functions/setSmoothScroll";
import { base64ToDataUrl } from "../functions/base64";

import dayjs from "dayjs";
import "dayjs/locale/fr";

export const Vitrine = ()=>{
  
  useEffect(() => {
      setSmoothScroll()

      fetch("http://localhost:3000/v1/evenements/all").then(data=> data.json()).then(res=>{

        let list = res.map(event=>{
         const debut = dayjs(event.date_debut);
      const fin = dayjs(event.date_fin);
      const isSameDay = debut.isSame(fin, "day");
      const prixMin = event.tarifs?.length > 0
        ? Math.min(...event.tarifs.map((t) => t.prix))
        : null;

    const binaryData = event.fichiers?.[0]?.donnees_binaire;
    const imageFromBase64 = base64ToDataUrl(binaryData); 

      return {  
        id: event.evenement_id,
        title: event.titre,
        image: imageFromBase64 || event.fichiers?.[0]?.fichier_url || list_of_event[0].image,
        date: isSameDay
          ? debut.format("D MMMM YYYY")
          : `${debut.format("D")} → ${fin.format("D MMMM YYYY")}`,
        price: prixMin,
      };
    });
    setListEvent(list)
        
        })


   

    }, []);

    let [listEvent,setListEvent] = useState([])

  
    return (
      <div className="w-full overflow-x-hidden">
        
        <Header title={"RENY Events"}/>
        
        <div className="scroll-smooth">
          <HeroSection/>
          <FuturEvent events={listEvent}/>
          <ServiceSection/>
          <AboutSection/>
          <ContactSection/>
          <FooterSection/>
        </div>

      </div>
    );
}