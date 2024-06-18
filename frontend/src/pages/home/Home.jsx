import React from 'react'
import Hero from './components/hero/Hero'
import Classes from './components/classes/Classes'
import Crossfit from './components/WelcomeCrossfit/Crossfit'
import ChooseProgram from './components/chooseProgram/ChooseProgram'
import Underchoose from './components/UnderChoose/Underchoose'
import PricingPlan from './components/pricingPlan/PricingPlan'

const Home = () => {
  return (
    <>
    <Hero/>
    <Classes/>
    <Crossfit/>
    <ChooseProgram/>
    <Underchoose/>
    <PricingPlan/>
    </>
  )
}

export default Home