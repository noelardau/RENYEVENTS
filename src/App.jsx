import { createBrowserRouter, RouterProvider} from "react-router-dom"; 
import { Vitrine } from './pages/Vitrine'
import {BackOffice} from './pages/BackOffice'
import { HomeBO } from "./pages/HomeBO";
import { NewEventForm } from "./pages/NewEvent";
import './App.css'


const app_path = {
    home: "/",
    back: "/admin",
}


const app_router = createBrowserRouter([
    {
        path: app_path.home,
        element: <Vitrine/> 
    },
    {
        path: app_path.back,
        element: <BackOffice/>,
        children: [
         {
          path: "",
          element: <HomeBO/>
         },
         {
          path: "createEvent",
          element: <NewEventForm/>
         } 
        ]
    }

])





function App() {

  return (
    <RouterProvider router={app_router}>
     <Vitrine/>
    </RouterProvider>
  )
}

export default App
