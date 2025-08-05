import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Thoughts from './pages/Thoughts'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // 检查系统主题偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    // 应用主题到document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App

