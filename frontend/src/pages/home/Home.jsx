import React from 'react'
import Hero from './components/hero/Hero'
import Classes from './components/classes/Classes'
import Crossfit from './components/WelcomeCrossfit/Crossfit'
import ChooseProgram from './components/chooseProgram/ChooseProgram'
import Underchoose from './components/UnderChoose/Underchoose'
import PricingPlan from './components/pricingPlan/PricingPlan'
import Whypeople from './components/Whypeople/Whypeople'
import Getstarted from './components/getStarted/Getstarted'

const Home = () => {
  return (
    <>
    <Hero/>
    <Classes/>
    <Crossfit/>
    <ChooseProgram/>
    <Underchoose/>
    <PricingPlan/>
    <Whypeople/>
    <Getstarted/>
    </>
  )
}

export default Home