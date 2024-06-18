import React from 'react'
import Hero from './components/hero/Hero'
import Classes from './components/classes/Classes'
import Crossfit from './components/WelcomeCrossfit/Crossfit'
import ChooseProgram from './components/chooseProgram/ChooseProgram'

const Home = () => {
  return (
    <>
    <Hero/>
    <Classes/>
    <Crossfit/>
    <ChooseProgram/>
    </>
  )
}

export default Home