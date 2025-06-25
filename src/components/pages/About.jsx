import { useState, useEffect } from "react"
import { Code2,Target, Sparkles, Zap, ArrowRight, CheckCircle, Star, Rocket, Brain, Coffee, Users, BookOpen, Monitor, Database, Globe } from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeValue, setActiveValue] = useState(0)
   const [activeSkill, setActiveSkill] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [countUp, setCountUp] = useState({ experience: 0, projects: 0, technologies: 0 })

  const coreValues = [
    { 
      icon: BookOpen, 
      title: "Continuous Learning", 
      desc: "From BCA fundamentals to modern web technologies - always eager to learn and grow",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Code2, 
      title: "Clean Code", 
      desc: "Writing maintainable, scalable code with focus on performance and user experience",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      icon: Target, 
      title: "Problem Solving", 
      desc: "Approaching challenges systematically, from chess logic to healthcare solutions",
      color: "from-purple-500 to-purple-600"
    },
    { 
      icon: Users, 
      title: "User-Centered", 
      desc: "Building responsive applications that work seamlessly across all devices",
      color: "from-amber-500 to-amber-600"
    }
  ]

 const technicalSkills = [
    { 
      category: "Frontend", 
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      icon: Monitor,
      color: "bg-blue-500"
    },
    { 
      category: "Backend", 
      skills: ["Node.js", "Express.js", "REST APIs", "C++"],
      icon: Database,
      color: "bg-emerald-500"
    },
    { 
      category: "Database", 
      skills: ["MongoDB", "MySQL", "Data Management"],
      icon: Database,
      color: "bg-purple-500"
    },
    { 
      category: "Tools", 
      skills: ["Git/GitHub", "VS Code", "API Integration"],
      icon: Globe,
      color: "bg-amber-500"
    }
  ]
  const journey = [
    {
      phase: "Foundation",
      title: "BCA Student",
      desc: "Building strong fundamentals in computer science and programming",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      phase: "Exploration",
      title: "Web Development",
      desc: "Discovered passion for creating beautiful, functional web applications",
      icon: Code2,
      color: "bg-emerald-500"
    },
    {
      phase: "Mastery",
      title: "Modern Stack",
      desc: "Mastered React, Tailwind CSS, and modern development practices",
      icon: Rocket,
      color: "bg-purple-500"
    },
    {
      phase: "Innovation",
      title: "Future Ready",
      desc: "Continuously learning and adapting to emerging technologies",
      icon: Brain,
      color: "bg-amber-500"
    }
  ]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % coreValues.length)
    }, 4000)

    const countInterval = setInterval(() => {
      setCountUp(prev => ({
        experience: prev.experience < 1 ? prev.experience + 0.1 : 1,
        projects: prev.projects < 5 ? prev.projects + 0.5 : 5,
        technologies: prev.technologies < 10 ? prev.technologies + 1 : 10
      }))
    }, 100)

    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(interval)
      clearInterval(countInterval)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden py-24">
      
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 border border-slate-200/40 rounded-full opacity-20 transition-transform duration-[4000ms] ease-in-out hidden lg:block"
          style={{
            top: '5%',
            right: '10%',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) rotate(${activeValue * 45}deg)`
          }}
        ></div>
        <div
          className="absolute w-64 h-64 border border-slate-300/30 rounded-full opacity-15 transition-transform duration-[3000ms] ease-in-out hidden lg:block"
          style={{
            bottom: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.02}px) rotate(${activeValue * -30}deg)`
          }}
        ></div>
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-slate-400/30 rounded-full animate-pulse hidden lg:block"
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + (i % 3) * 25}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm border-l-4 border-slate-600 shadow-lg rounded-r-full mb-6 hover:shadow-xl transition-all duration-300 group">
            <div className="relative">
              <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-slate-600 rounded-full animate-ping"></div>
            </div>
            <span className="text-slate-700 font-bold">About Me</span>
            <Sparkles className="w-5 h-5 text-slate-600 group-hover:rotate-12 transition-transform" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6 leading-tight">
            <span className="text-slate-200">
              Web Developer
            </span>
            <br />
            <span className="text-amber-400 font-normal text-2xl md:text-3xl">
              Building Modern Web Solutions
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            BCA graduate passionate about creating responsive, user-friendly web applications. 
            From learning programming fundamentals to building full-stack solutions, 
            I'm driven by the endless possibilities of web development.
          </p>
        </div>


        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative p-6 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all duration-500 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="text-4xl font-black text-blue-600 mb-2">
              {Math.round(countUp.experience)}+
            </div>
            <div className="text-slate-600 font-bold">Year Learning</div>
            <div className="text-sm text-slate-500 mt-1">Continuous Growth</div>
          </div>
          
          <div className="relative p-6 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all duration-500 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="text-4xl font-black text-emerald-600 mb-2">
              {Math.round(countUp.projects)}+
            </div>
            <div className="text-slate-600 font-bold">Projects Built</div>
            <div className="text-sm text-slate-500 mt-1">Real-world Applications</div>
          </div>
          
          <div className="relative p-6 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all duration-500 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="text-4xl font-black text-purple-600 mb-2">
              {Math.round(countUp.technologies)}+
            </div>
            <div className="text-slate-600 font-bold">Technologies</div>
            <div className="text-sm text-slate-500 mt-1">Modern Stack</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative p-8 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-500 group">
              <div className="absolute top-0 left-8 transform -translate-y-1/2">
                <div className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold text-sm rounded-full flex items-center gap-2">
                  <Coffee className="w-4 h-4" />
                  My Story
                </div>
              </div>
              
             <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  My path into web development began during my <strong>BCA studies</strong> at Pt. J.L.N. Govt. College. 
                  What started as curriculum requirements quickly became a genuine passion for creating digital solutions.
                </p>
                
                <p>
                  Through college projects and self-directed learning, I discovered the power of modern web technologies. 
                  From basic HTML/CSS to complex <strong>React applications</strong>, each project taught me something new 
                  about building user-centered experiences.
                </p>
                
                <p>
                  Today, I specialize in <strong>full-stack development</strong> with React, Node.js, and modern databases. 
                  My approach focuses on writing clean, maintainable code and creating applications that solve real problems.
                </p>
              </div>
            </div>

              <div className="relative p-8 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg text-white">
                  <Code2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Technical Skills</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((category, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      index === activeSkill 
                        ? 'border-blue-200 bg-blue-50/50 shadow-sm' 
                        : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <category.icon className="w-4 h-4 text-slate-600" />
                      <h3 className="font-semibold text-slate-900 text-sm">{category.category}</h3>
                    </div>
                    <div className="space-y-1">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-xs text-slate-600">{skill}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className={`space-y-8 transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            <div className="relative p-8 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 left-8 transform -translate-y-1/2">
                <div className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-sm rounded-full flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Core Values
                </div>
              </div>
              
              <div className="mt-4 relative h-48 overflow-hidden">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === activeValue
                        ? 'translate-y-0 opacity-100 scale-100'
                        : index < activeValue
                          ? '-translate-y-full opacity-0 scale-95'
                          : 'translate-y-full opacity-0 scale-95'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${value.color} rounded-xl text-white`}>
                        <value.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                        <p className="text-slate-700 leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center gap-2 mt-4">
                {coreValues.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeValue ? 'bg-slate-700 w-6' : 'bg-slate-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="relative p-8 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 left-8 transform -translate-y-1/2">
                <div className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold text-sm rounded-full flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Journey
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                {journey.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className={`p-2 ${step.color} rounded-lg text-white group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">{step.phase}</div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative p-8 lg:p-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-2xl text-white overflow-hidden hover:shadow-2xl transition-all duration-500 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-slate-300 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-slate-200 font-bold text-sm uppercase tracking-wide">What Drives Me</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm lg:text-base leading-relaxed">
                      <strong>Crafting intuitive</strong> and responsive user interfaces that delight users
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm lg:text-base leading-relaxed">
                      <strong>Optimizing performance</strong> for lightning-fast web applications
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm lg:text-base leading-relaxed">
                      <strong>Staying updated</strong> with latest web technologies and best practices
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm lg:text-base leading-relaxed">
                      <strong>Collaborating with teams</strong> to bring innovative ideas to life
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-500 group">
            <div className="text-slate-700">
              <span className="font-bold">Ready to collaborate?</span> Let's build something amazing together!
            </div>
            <ArrowRight className="w-5 h-5 text-slate-600 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About