import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import { Lyout } from "./routes/Lyout"
import { Liste } from "./components/Liste"
import { Create } from "./components/Create"


function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Lyout />,
      children:[
        {path:'/users', element:<Liste/>},
        {path:'users/create', element:<Create/>},
      ]
    }

  ])
  return  <RouterProvider router={routes} />;
}

export default App
