import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />}/>
            <Route path='/education' element={<Education />}/>
            <Route path='/certifications' element={<Certifications />}/>
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

