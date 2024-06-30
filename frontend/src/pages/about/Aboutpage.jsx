import React from 'react'
import Hero from './components/hero/Hero'
import Whoweare from './components/WhoWeAre/Whoweare'
import Comment from './components/comment/Comment'
import Ourtrainers from './components/OurTrainers/Ourtrainers'
import Getstarted from '../home/components/getStarted/Getstarted'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Aboutpage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About Us</title>
        </Helmet>
      </HelmetProvider>
      <Hero />
      <Whoweare />
      <Comment />
      <Ourtrainers />
      <Getstarted />
    </>
  )
}

export default Aboutpage