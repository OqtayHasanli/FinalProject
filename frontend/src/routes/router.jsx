import React from "react"
import Home from "../pages/home/Home"
import Nopage from "../pages/nopage/Nopage"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Layout from "../layout/Layout"
import Shop from "../pages/shop/Shop"



export const routes=[{
    element:<Layout/>,
    children: [
        {
          path: "home",
          element: <Home />,
        },
        {
            path: "shop",
            element: <Shop/>,
          },
      ],
},
{
    path: "*",
    element:<Nopage/>
},
{
    path: "/",
    element:<Login/>
},
{
    path: "/register",
    element:<Register/>
},
] 