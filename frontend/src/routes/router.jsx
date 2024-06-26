import React from "react"
import Home from "../pages/home/Home"
import Nopage from "../pages/nopage/Nopage"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Layout from "../layout/Layout"
import Shop from "../pages/shop/Shop"
import Aboutpage from "../pages/about/Aboutpage"
import Detail from "../pages/detail/Detail"
import BasketPage from "../pages/basket/BasketPage"
import Gallery from "../pages/gallery/Gallery"
import Favorite from "../pages/favorite/Favorite"



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
        {
            path: "about",
            element: <Aboutpage/>,
        },
        {
            path: "/:id",
            element: <Detail/>,
        },
        {
            path: "basket",
            element: <BasketPage />,
        },
        {
            path: "gallery",
            element: <Gallery />,
        },
        {
            path: "favorite",
            element: <Favorite />,
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