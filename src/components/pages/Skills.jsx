import { useState, useEffect } from "react"
import { Code2, Database, Globe, Sparkles, Target, ChevronRight, Cpu, Layout, Brain } from "lucide-react"
import Container from "../ui/Container"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const skillCategories = [
    {
      name: "Languages",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML", description: "Semantic markup and accessibility" },
        { name: "CSS", description: "Modern styling and animations" },
        { name: "JavaScript", description: "ES6+ and modern features" },
        { name: "C++", description: "Object-oriented programming" }
      ]
    },
    {
      name: "Frameworks & Libraries",
      icon: Layout,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "React", description: "Component-based UI development" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "Node.js", description: "Server-side JavaScript runtime" },
        { name: "MERN Stack", description: "Web application framework" }
      ]
    },
    {
      name: "Databases",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", description: "NoSQL document database" },
        { name: "MySQL", description: "Relational database management" }
      ]
    },
    {
      name: "Tools & Technologies",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", description: "Version control system" },
        { name: "GitHub", description: "Code repository and collaboration" },
        { name: "Visual Studio Code", description: "Code editor and debugging" },
        { name: "REST APIs", description: "Web service architecture" }
      ]
    }
  ]

  const softSkills = [
    { name: "Problem-Solving", icon: Brain },
    { name: "Team Collaboration", icon: Globe },
    { name: "Time Management", icon: Target }
  ]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % skillCategories.length)
    }, 4000)

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
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="py-48 bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 border border-slate-200/40 rounded-full opacity-20 transition-transform duration-[5000ms] ease-in-out hidden lg:block"
          style={{
            top: '20%',
            right: '10%',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.02}px) rotate(${activeCategory * 60}deg)`
          }}
        ></div>
        <div
          className="absolute w-64 h-64 border border-slate-300/30 rounded-full opacity-15 transition-transform duration-[6000ms] ease-in-out hidden lg:block"
          style={{
            bottom: '10%',
            left: '15%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.03}px) rotate(${activeCategory * -45}deg)`
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
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${2 + i * 0.4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm border-l-4 border-slate-600 shadow-lg rounded-r-full mb-6 hover:shadow-xl transition-all duration-300 group">
            <div className="relative">
              <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-slate-600 rounded-full animate-ping"></div>
            </div>
            <span className="text-slate-700 font-bold">Technical Expertise</span>
            <Sparkles className="w-5 h-5 text-slate-600 group-hover:rotate-12 transition-transform" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-300 mb-4">
            My <span className="">Skills</span>
          </h2>
          <p className="text-lg text-amber-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive technical skills for building responsive and user-friendly applications
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`group flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-bold text-sm lg:text-base transition-all duration-300 hover:scale-105 ${
                  index === activeCategory
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 lg:w-5 h-4 lg:h-5 transition-transform ${index === activeCategory ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            )
          })}
        </div>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative min-h-[400px] lg:min-h-[350px]">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`absolute inset-0 transition-all duration-700 ${
                  categoryIndex === activeCategory
                    ? 'translate-x-0 opacity-100 scale-100'
                    : categoryIndex < activeCategory
                      ? '-translate-x-full opacity-0 scale-95'
                      : 'translate-x-full opacity-0 scale-95'
                }`}
              >
                <div className="text-center mb-8 lg:mb-12">
                  <div className={`inline-flex items-center gap-4 px-6 lg:px-8 py-4 lg:py-6 bg-gradient-to-r ${category.color} text-white rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group`}>
                    <category.icon className="w-6 lg:w-8 h-6 lg:h-8 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-xl lg:text-2xl font-black">{category.name}</h3>
                      <p className="text-sm lg:text-base opacity-90">{category.skills.length} Technologies</p>
                    </div>
                    <ChevronRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative p-6 lg:p-8 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl lg:rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className="relative">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 lg:p-4 bg-gradient-to-r ${category.color} rounded-xl lg:rounded-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                            <category.icon className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors mb-2">
                              {skill.name}
                            </h4>
                            <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                              Proficient
                            </span>
                            <div className="flex gap-1">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                                  style={{ animationDelay: `${i * 0.1}s` }}
                                ></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        {/* <div className={`mt-12 lg:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Soft Skills
            </h3>
            <p className="text-slate-600">Essential skills for effective collaboration and project success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="group p-6 lg:p-8 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl lg:rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-500 text-center"
                >
                  <div className="p-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-lg lg:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {skill.name}
                  </h4>
                </div>
              )
            })}
          </div>
        </div> */}

        {/* Skills Summary */}
        {/* <div className={`mt-12 lg:mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative p-6 lg:p-8 bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl lg:rounded-3xl text-white overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 lg:w-48 h-32 lg:h-48 bg-white/5 rounded-full -translate-y-16 lg:-translate-y-24 translate-x-16 lg:translate-x-24 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-24 lg:w-32 h-24 lg:h-32 bg-white/5 rounded-full translate-y-12 lg:translate-y-16 -translate-x-12 lg:-translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 lg:w-8 h-6 lg:h-8 text-slate-300 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-slate-200 font-bold text-sm lg:text-base uppercase tracking-wide">Skills Overview</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-3 lg:mb-4">
                    Ready to Build Scalable Solutions
                  </h3>
                  <p className="text-sm lg:text-lg leading-relaxed text-slate-200">
                    Proficient in <strong>React, Tailwind CSS, and full-stack development</strong> with a strong focus on creating 
                    <strong> responsive and user-friendly applications</strong>. Experienced in building <strong>scalable and innovative solutions</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-black mb-1">10+</div>
                    <div className="text-xs lg:text-sm text-slate-300 font-semibold">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-black mb-1">3</div>
                    <div className="text-xs lg:text-sm text-slate-300 font-semibold">Major Projects</div>
                  </div>
                  <div className="text-center lg:col-span-1 col-span-2">
                    <div className="text-2xl lg:text-3xl font-black mb-1">7.9</div>
                    <div className="text-xs lg:text-sm text-slate-300 font-semibold">CGPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </section>
  )
}

export default Skills