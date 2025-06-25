import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Contact from "./components/pages/Contact"
import Footer from "./components/layout/Footer"
import Skills from "./components/pages/Skills"
import Education from "./components/pages/Education"
import ScrollToTop from "./components/utils/ScrollToTop"
import SEOHelmet from "./components/utils/SEOHelmet"

const App = () => {
  return (
      <Router>
        <SEOHelmet />
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  )
}

export default App
