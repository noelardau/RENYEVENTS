import { useEffect } from "react";
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { FuturEvent } from "../components/FuturEvent"
import { ServiceSection } from "../components/ServiceSection"
import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { FooterSection } from "../components/FooterSection"
import { list_of_event } from "../exemple_data/list_of_events";
import setSmoothScroll from "../functions/setSmoothScroll";

export const Vitrine = ()=>{
  
  useEffect(() => {
      setSmoothScroll()
    }, []);

  
    return (
      <>
        
        <Header title={"RENY Events"}/>
        
        <div className="pt-[150px] md:pt-[88px] scroll-smooth">
          <HeroSection/>
          <FuturEvent events={list_of_event}/>
          <ServiceSection/>
          <AboutSection/>
          <ContactSection/>
          <FooterSection/>
        </div>

      </>
    );
}