import React from 'react'
import { routes } from "./routes/router.jsx"
import "./assets/style/reset.scss"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const router = createBrowserRouter(routes)

function App() {

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
