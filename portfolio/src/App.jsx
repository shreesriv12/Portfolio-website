import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Achievements/>

    <Contact/>
    </main>
  )
}

export default App
