import React from 'react'
import Getstarted from '../home/components/getStarted/Getstarted'
import Hero from './components/hero/Hero'
import Ourgallery from './components/Ourgallery/Ourgallery'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Gallery = () => {
  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Gallery</title>
        </Helmet>
      </HelmetProvider>
    <Hero/>
    <Ourgallery/>
    <Getstarted/>
    </>
  )
}

export default Gallery