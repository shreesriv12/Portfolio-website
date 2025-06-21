import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import CodingProfilesDashboard from './sections/Coding'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <CodingProfilesDashboard/>
    <Achievements/>
    
    <Contact/>
    <Footer/>x
    </main>
  )
}

export default App
