import { useState } from 'react'
import NavBar from "./Components/NavBar"
import HeroSection from "./Components/HeroSection"
import Logos from "./Components/Logos"
import FeatureSection from "./Components/FeatureSection"
import Feature from "./Components/Feature"
import CallToAction from "./Components/CallToAction"
import Find from "./Components/Find"
import GetStarted from './Components/GetStarted'
import Footer from "./Components/Footer"


export default function App() {
   return (
   <div>
      <NavBar />
      <HeroSection />
      <Logos />
      <FeatureSection />
      <Feature />
      <CallToAction />
      <Find />
      <GetStarted />
      <Footer />
   </div>
  )
}