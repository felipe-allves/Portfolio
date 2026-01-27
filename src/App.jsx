import { useState } from 'react'

import './styles/default.css'
import './styles/global.css'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Knowledge from './components/Knowledge'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Knowledge />
    <Contact />
    <Footer />
    </>
  )
}

export default App
