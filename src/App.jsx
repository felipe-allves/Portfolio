import { useState } from 'react'

import './assets/Styles/default.css'

import Header from './assets/Components/Header/Header'
import Hero from './assets/Components/Hero/Hero'
import Projects from './assets/Components/Projects/Projects'
import Certificates from './assets/Components/Certificates/Certificates'

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Projects/>
    <Certificates/>
    </>
  )
}

export default App
