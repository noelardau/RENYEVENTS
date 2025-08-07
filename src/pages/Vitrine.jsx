import { useEffect } from "react";
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { FuturEvent } from "../components/FuturEvent"
import { ServiceSection } from "../components/ServiceSection"
import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { FooterSection } from "../components/FooterSection"

export const Vitrine = ()=>{
    useEffect(() => {
      const handleClick = (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
          const id = anchor.getAttribute('href').slice(1);
          const el = document.getElementById(id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
      <>
        <Header title={"RENY Events"}/>
        <div className="pt-[88px] scroll-smooth">
          <HeroSection/>
          <FuturEvent/>
          <ServiceSection/>
          <AboutSection/>
          <ContactSection/>
          <FooterSection/>
        </div>
      </>
    );
}