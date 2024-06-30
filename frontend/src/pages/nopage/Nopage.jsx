import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Nopage = () => {
  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Nopage</title>
        </Helmet>
      </HelmetProvider>
    <div>Nopage</div>
    </>
  )
}

export default Nopage