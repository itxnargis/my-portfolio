import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

const App = () => {
  return (
    <Router>
      <div className='bg-rose-50 text-black min-h-screen flex flex-col'>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/skills' element={<Skills />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
