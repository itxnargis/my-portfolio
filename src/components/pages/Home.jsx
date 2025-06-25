
import { Github, Linkedin, Mail, Twitter, ArrowRight, Download, Code2, ExternalLink, Briefcase, MapPin,Star, Phone, CheckCircle, Zap, Target, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Container from "../ui/Container"
import Button from "../ui/Button"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Education from "../pages/Education"
import Contact from "../pages/Contact"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const profileSections = [
    { title: "Developer", desc: "Creating modern web applications with latest technologies" },
    { title: "Problem Solver", desc: "Converting ideas into functional digital solutions" },
    { title: "Quick Learner", desc: "Mastering new frameworks and tools rapidly" },
    { title: "Team Player", desc: "Collaborating effectively in development teams" }
  ]

  const typingTexts = ["open to freelance opportunities"]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % profileSections.length)
    }, 3000)

    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    const typeInterval = setInterval(() => {
      const currentText = typingTexts[textIndex]

      if (!isDeleting) {
        setTypingText(currentText.substring(0, charIndex + 1))
        charIndex++

        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setTypingText(currentText.substring(0, charIndex - 1))
        charIndex--

        if (charIndex === 0) {
          isDeleting = false
          textIndex = (textIndex + 1) % typingTexts.length
        }
      }

      setIsTyping(charIndex === 0 || charIndex === currentText.length)
    }, isDeleting ? 50 : 100)

    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        const rect = e.currentTarget?.getBoundingClientRect() || { left: 0, top: 0 }
        setMousePosition({
          x: ((e.clientX - rect.left) / window.innerWidth) * 100,
          y: ((e.clientY - rect.top) / window.innerHeight) * 100
        })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(interval)
      clearInterval(typeInterval)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden py-16 sm:py-4">

        <div className="absolute inset-0">
          <div
            className="absolute w-64 lg:w-96 h-64 lg:h-96 border border-slate-200/60 rounded-full opacity-20 lg:opacity-30 transition-transform duration-[3000ms] ease-in-out hidden md:block"
            style={{
              top: '10%',
              right: '5%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${activeSection * 90}deg)`
            }}
          ></div>
          <div
            className="absolute w-48 lg:w-64 h-48 lg:h-64 border border-slate-300/40 rounded-full opacity-15 lg:opacity-20 transition-transform duration-[4000ms] ease-in-out hidden md:block"
            style={{
              bottom: '20%',
              left: '5%',
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px) rotate(${activeSection * -45}deg)`
            }}
          ></div>

          <div className="absolute inset-0 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-slate-400/40 rounded-full opacity-40 animate-pulse hidden lg:block"
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${20 + (i % 2) * 35}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${2 + i * 0.5}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <Container className="min-h-screen flex items-center py-8 lg:py-20 relative z-10">
          <div className="w-full">

           <div className="lg:hidden mb-8 flex justify-center">
  <div className="relative group">
    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500">
      <img 
        src="/src/assets/nargisProfile.jpeg" 
        alt="Nargis Khatun - Full Stack Developer" 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        onError={(e) => {
          e.target.outerHTML = `
            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-600 to-slate-800">
              <div class="text-center text-white">
                <div class="text-4xl font-black mb-2">NK</div>
                <div class="text-sm font-semibold opacity-90">Full Stack Developer</div>
              </div>
            </div>
          `
        }}
      />
    </div>
    <div className="absolute top-2 right-2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
      Available
    </div>
  </div>
</div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">

              <div className={`lg:col-span-7 space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>

                <div className="flex justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-white/90 backdrop-blur-sm border-l-4 border-emerald-500 shadow-lg rounded-r-full hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      <div className="w-2 lg:w-3 h-2 lg:h-3 bg-emerald-500 rounded-full"></div>
                      <div className="absolute inset-0 w-2 lg:w-3 h-2 lg:h-3 bg-emerald-500 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-emerald-700 font-bold text-sm lg:text-base">
                      {typingText}
                      <span className={`inline-block w-0.5 h-4 lg:h-5 bg-emerald-600 ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
                    </span>
                    <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
                  <div className="relative">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[0.9] relative group">
                      <span className="relative leading-normal bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600 text-transparent bg-clip-text inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                        Nargis  Khatun
                      </span> 
                    </h1>
                  </div>

                  <div className="relative h-16 lg:h-20 overflow-hidden">
                    {profileSections.map((section, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ${index === activeSection
                            ? 'translate-y-0 opacity-100 scale-100'
                            : index < activeSection
                              ? '-translate-y-full opacity-0 scale-95'
                              : 'translate-y-full opacity-0 scale-95'
                          }`}
                      >
                        <h2 className="text-2xl lg:text-4xl font-bold text-slate-300 mb-2 flex items-center justify-center lg:justify-start gap-2 lg:gap-3">
                          Full Stack {section.title}
                          <Sparkles className="w-4 lg:w-6 h-4 lg:h-6 text-slate-100 animate-pulse" />
                        </h2>
                        <p className="text-base lg:text-lg text-amber-600 font-medium px-4 lg:px-0">
                          {section.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 px-4 lg:px-0">
                  <div className="group p-3 lg:p-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl lg:rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-slate-200 group-hover:scale-110 transition-all duration-300">
                        <Mail className="w-4 lg:w-5 h-4 lg:h-5 text-slate-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Email</div>
                        <div className="text-slate-900 font-bold text-xs lg:text-sm group-hover:text-slate-600 transition-colors truncate">
                          itxnargiskhatun@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group p-3 lg:p-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl lg:rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yellow-100 rounded-xl group-hover:bg-yellow-200 group-hover:scale-110 transition-all duration-300">
                        <Star className="w-4 lg:w-5 h-4 lg:h-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">CGPA</div>
                        <div className="text-slate-900 font-bold text-xs lg:text-sm group-hover:text-yellow-600 transition-colors">8.0 / 10.0</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative p-4 lg:p-6 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl lg:rounded-2xl text-white overflow-hidden hover:shadow-2xl transition-all duration-500 group mx-4 lg:mx-0">
                  <div className="absolute top-0 right-0 w-20 lg:w-32 h-20 lg:h-32 bg-white/5 rounded-full -translate-y-10 lg:-translate-y-16 translate-x-10 lg:translate-x-16 group-hover:scale-125 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-16 lg:w-20 h-16 lg:h-20 bg-white/5 rounded-full translate-y-8 lg:translate-y-10 -translate-x-8 lg:-translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative">
                    <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                      <Target className="w-5 lg:w-6 h-5 lg:h-6 text-slate-300 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-slate-200 font-bold text-xs lg:text-sm uppercase tracking-wide">Why Choose Me</span>
                    </div>
                    <p className="text-sm lg:text-lg leading-relaxed">
                      Recent BCA graduate with <strong>solid foundation</strong> in modern web technologies.
                      I bring <strong>fresh perspective, dedication,</strong> and <strong>strong project portfolio</strong>
                      showcasing my ability to build scalable applications. Ready to learn, contribute, and grow with your team.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 px-4 lg:px-0">
                  <Button
                    to="/projects"
                    className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl lg:rounded-2xl transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-105 hover:shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                    <div className="relative flex items-center">
                      <Briefcase className="w-4 lg:w-5 h-4 lg:h-5 mr-2 lg:mr-3 group-hover:scale-110 transition-transform" />
                      <span className="text-sm lg:text-base">View My Projects</span>
                      <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 ml-2 lg:ml-3 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Button>

                  <Button
                    href="/CV.pdf"
                    className="group px-6 lg:px-8 py-3 lg:py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-xl lg:rounded-2xl hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-3 lg:w-4 h-3 lg:h-4 mr-2 lg:mr-3 group-hover:animate-bounce" />
                    <span className="text-sm lg:text-base">Download Resume</span>
                    <ExternalLink className="w-3 h-3 ml-2 group-hover:scale-125 transition-transform" />
                  </Button>
                </div>

                <div className="flex gap-3 justify-center lg:justify-start px-4 lg:px-0">
                  <SocialLink href="mailto:itxnargiskhatun@gmail.com" icon={Mail} label="Email" />
                  <SocialLink href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/" icon={Linkedin} label="LinkedIn" />
                  <SocialLink href="https://github.com/itxnargis" icon={Github} label="GitHub" />
                  <SocialLink href="https://twitter.com/81283nargis" icon={Twitter} label="Twitter" />
                </div>
              </div>

              <div className={`hidden lg:block lg:col-span-5 space-y-6 lg:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>

                <div className="relative mx-auto group flex justify-center">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img
                      src="/src/assets/nargisProfile.jpeg"
                      alt="Nargis Khatun - Full Stack Developer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.outerHTML = `
            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-600 to-slate-800">
              <div class="text-center text-white">
                <div class="text-6xl font-black mb-2">NK</div>
                <div class="text-lg font-semibold opacity-90">Full Stack Developer</div>
              </div>
            </div>
          `
                      }}
                    />
                  </div>
                  <div className="absolute top-4 right-28 px-4 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                    Available
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                    <div className="text-3xl font-black text-slate-700 mb-2 group-hover:scale-110 transition-transform">5+</div>
                    <div className="text-slate-600 font-bold text-sm">Projects Built</div>
                  </div>
                  <div className="p-6 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                    <div className="text-3xl font-black text-emerald-600 mb-2 group-hover:scale-110 transition-transform">8.0</div>
                    <div className="text-slate-600 font-bold text-sm">CGPA</div>
                  </div>
                </div>

                <div className="relative p-6 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-500 group">
                  <div className="absolute top-0 left-6 transform -translate-y-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold text-sm rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                      <Zap className="w-4 h-4 animate-pulse" />
                      Featured Work
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                      Chess Master Platform
                    </h4>
                    <p className="text-slate-700 mb-4 leading-relaxed text-sm">
                      Advanced chess application with AI integration, multiplayer support, and optimized performance for seamless gaming experience.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                        <span>Real-time multiplayer gaming</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                        <span>AI chess engine integration</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                        <span>Cross-platform compatibility</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {['React', 'Node.js', 'MongoDB', 'Socket.IO'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href="https://chess-frontend-dun.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/itxnargis/chess-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 border border-slate-800 text-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 hover:scale-105 text-sm font-medium"
                      >
                        <Code2 className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden mt-8 px-4">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-black text-slate-700 mb-1">5+</div>
                  <div className="text-slate-600 font-bold text-sm">Projects</div>
                </div>
                <div className="p-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-black text-emerald-600 mb-1">8.0</div>
                  <div className="text-slate-600 font-bold text-sm">CGPA</div>
                </div>
              </div>

              <div className="relative p-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-4 transform -translate-y-1/2">
                  <div className="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold text-xs rounded-full flex items-center gap-2">
                    <Zap className="w-3 h-3" />
                    Featured Work
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Chess Master Platform</h4>
                  <p className="text-slate-700 mb-3 text-sm leading-relaxed">
                    Advanced chess application with AI integration and multiplayer support.
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {['React', 'Node.js', 'MongoDB'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="https://chess-master-demo.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-slate-800 text-white rounded-lg text-xs font-medium flex-1 justify-center"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                    <a
                      href="https://github.com/itxnargis/chess-master"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 border border-slate-800 text-slate-800 rounded-lg text-xs font-medium flex-1 justify-center"
                    >
                      <Code2 className="w-3 h-3" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-slate-50">
        <div className="">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
    </>
  )
}

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="group relative w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:scale-110 shadow-sm overflow-hidden"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    <Icon size={16} className="lg:w-5 lg:h-5 relative z-10 group-hover:scale-110 transition-transform" />
  </a>
)

export default Home
