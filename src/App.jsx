import './App.css'
import HeroSection from './Components/HeroSection'
import React from 'react'
import NavSec from './Components/NavbarSec'
import FrameSec from './Components/FrameSection'
import Sec2 from './Components/SecondSec'
import Sec3 from './Components/ThirdSec'
import AnalyticsSec from './Components/AnalyticsSec'
import FormSec from './Components/FormSec'
import FaqAndRevolutionizingSec from './Components/FaqSec'
import PageFootSection from './Components/PageFootSec'



function App() {
  return (
    <>
      <NavSec />
      <HeroSection />
      <FrameSec />
      <Sec2 />
      <Sec3 />
      <AnalyticsSec />
      <FormSec />
      <FaqAndRevolutionizingSec />
      <PageFootSection />
    </>
  )
}

export default App
