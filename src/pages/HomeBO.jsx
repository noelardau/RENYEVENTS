import { useEffect } from "react";
import { LoginForm } from "../components/LoginForm";
import { EventManagement } from "./GestionEvent";

import { useUserStore } from '../store/userStore';


export const HomeBO = ()=>{


  let {isConnected, setIsConnected} = useUserStore()


  useEffect(() => {
   
    }, []);



    function connexion(username,password) {
      
        if(username == "admin" && password == "admin"){
          setIsConnected(true)
        }else{
          alert("identifiant incorrect")
        }


    } 
    
    
    
    return (
          isConnected ?
          
          <EventManagement></EventManagement>
                    :
          <LoginForm onLogin={connexion}></LoginForm>)

        }