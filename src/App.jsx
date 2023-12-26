import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Analytics from './components/analytics/Analytics'
import Newsletter from './components/newsletter/Newsletter'
import Cards from './components/Cards/Cards'
import Footer from './components/footer/Footer'
function App() {


  return (
    <>
      <Navbar/>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards/>
      <Footer />
    </>
  )
}

export default App
