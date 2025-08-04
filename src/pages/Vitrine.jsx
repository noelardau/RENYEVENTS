import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { FuturEvent } from "../components/FuturEvent"
import { ServiceSection } from "../components/ServiceSection"
import {AboutSection} from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { FooterSection } from "../components/FooterSection"

export const Vitrine = ()=>{

    return <>
       <Header title={"RENY Events"}/>

        <HeroSection/>
        <FuturEvent/>
        <ServiceSection/>
        <AboutSection/>
        <ContactSection/>
        <FooterSection/>
    </>

}