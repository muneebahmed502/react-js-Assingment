import {createBrowserRouter,RouterProvider, } from "react-router-dom"
import Dashboard from "../Dashboard";
import Detail from "../Detail";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);
  function Router(){
    return  <RouterProvider router={router} />
  }
  export default Router;