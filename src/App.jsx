import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Logo from './components/Logo'
import SponsorLink from './components/SponsorLink'

function App() {
  const [isDark, setIsDark] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
      isDark ? 'bg-dark text-text-primary' : 'bg-white text-gray-900'
    }`}>
      {/* Background Canvas */}
      <canvas 
        className="fixed inset-0 w-full h-full pointer-events-none opacity-20"
        style={{ zIndex: -1 }}
      />
      
      {/* Logo */}
      <Logo />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Elements */}
      {/* <ThemeToggle isDark={isDark} setIsDark={setIsDark} /> */}

      
      {/* Navigation */}
      <Navbar scrollY={scrollY} />
    </div>
  )
}

export default App
