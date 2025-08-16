import { createBrowserRouter, RouterProvider} from "react-router-dom"; 
import { Vitrine } from './pages/Vitrine'
import './App.css'


const app_path = {
    home: "/",
    test: "/test"
}


const app_router = createBrowserRouter([
    {
        path: app_path.home,
        element: <Vitrine/> 
    },
    {
        path: app_path.test,
        element: <div><h1>Ceci est un test</h1></div>
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
