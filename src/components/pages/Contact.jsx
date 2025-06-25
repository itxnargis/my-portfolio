import { useState, useEffect } from "react"
import { Send, User, Mail, MessageSquare, Sparkles, CheckCircle, Phone, MapPin, Clock, ArrowRight, Star, ExternalLink, MessageCircle, Zap, Target, Github, Linkedin, Twitter, Shield, Eye, EyeOff } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState(0)
  const [showPhone, setShowPhone] = useState(false)
  const [showWhatsApp, setShowWhatsApp] = useState(false)

  const contactMethods = [
    { title: "Email First", desc: "Professional communication via email" },
    { title: "Social Connect", desc: "Connect through professional platforms" },
    { title: "Quick Message", desc: "Send a message using the contact form" },
    { title: "Direct Contact", desc: "Available upon request for urgent matters" }
  ]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % contactMethods.length)
    }, 3000)

    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        setMousePosition({
          x: ((e.clientX) / window.innerWidth) * 100,
          y: ((e.clientY) / window.innerHeight) * 100
        })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(interval)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      console.log("Form submitted", formData)
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in discussing a project."
    const whatsappUrl = `https://wa.me/918750471890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const revealPhone = () => {
    setShowPhone(true)
    setTimeout(() => setShowPhone(false), 10000)
  }

  const revealWhatsApp = () => {
    setShowWhatsApp(true)
    setTimeout(() => setShowWhatsApp(false), 10000)
  }

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-8 lg:py-20 relative z-10">
          <div className="w-full">

            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-white/90 backdrop-blur-sm border-l-4 border-emerald-500 shadow-lg rounded-r-full hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="w-2 lg:w-3 h-2 lg:h-3 bg-emerald-500 rounded-full"></div>
                  <div className="absolute inset-0 w-2 lg:w-3 h-2 lg:h-3 bg-emerald-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-emerald-700 font-bold text-sm lg:text-base">Available for new projects</span>
                <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                <span className="text-slate-300">
                  Let's Connect
                </span>
              </h1>
              
              <div className="relative h-16 lg:h-20 overflow-hidden mb-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${index === activeSection
                        ? 'translate-y-0 opacity-100 scale-100'
                        : index < activeSection
                          ? '-translate-y-full opacity-0 scale-95'
                          : 'translate-y-full opacity-0 scale-95'
                      }`}
                  >
                    <h2 className="text-xl lg:text-2xl font-bold text-amber-400 mb-2 flex items-center justify-center gap-2 lg:gap-3">
                      {method.title}
                      <Sparkles className="w-4 lg:w-5 h-4 lg:h-5 text-amber-400 animate-pulse" />
                    </h2>
                    <p className="text-base lg:text-lg text-amber-400 font-medium">
                      {method.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-lg lg:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
                Ready to bring your ideas to life? I'm here to help you build amazing digital experiences. 
                Let's discuss your project and make it happen!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 px-4 lg:px-0 max-w-5xl mx-auto">
              
              <a
                href="mailto:itxnargiskhatun@gmail.com"
                className="group p-4 lg:p-6 bg-blue-500 hover:bg-blue-600 text-white rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center gap-3">
                  <Mail className="w-6 lg:w-8 h-6 lg:h-8 group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <div className="font-bold text-sm lg:text-base">Email</div>
                    <div className="text-xs lg:text-sm opacity-90">Preferred Method</div>
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 lg:p-6 bg-blue-700 hover:bg-blue-800 text-white rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center gap-3">
                  <Linkedin className="w-6 lg:w-8 h-6 lg:h-8 group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <div className="font-bold text-sm lg:text-base">LinkedIn</div>
                    <div className="text-xs lg:text-sm opacity-90">Professional</div>
                  </div>
                </div>
              </a>

              <a
                href="https://twitter.com/81283nargis"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 lg:p-6 bg-slate-900 hover:bg-black text-white rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center gap-3">
                  <Twitter className="w-6 lg:w-8 h-6 lg:h-8 group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <div className="font-bold text-sm lg:text-base">Twitter</div>
                    <div className="text-xs lg:text-sm opacity-90">Follow Me</div>
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/itxnargis"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 lg:p-6 bg-green-900 hover:bg-green-600 text-white rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center gap-3">
                  <Twitter className="w-6 lg:w-8 h-6 lg:h-8 group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <div className="font-bold text-sm lg:text-base">Github</div>
                    <div className="text-xs lg:text-sm opacity-90">Professional</div>
                  </div>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-4 lg:px-0">
              
              <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                
                <div className="relative p-6 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl lg:rounded-2xl text-white overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                  <div className="absolute top-0 right-0 w-20 lg:w-32 h-20 lg:h-32 bg-white/5 rounded-full -translate-y-10 lg:-translate-y-16 translate-x-10 lg:translate-x-16 group-hover:scale-125 transition-transform duration-700"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-5 lg:w-6 h-5 lg:h-6 text-slate-300" />
                      <span className="text-slate-200 font-bold text-sm lg:text-base uppercase tracking-wide">Why Work With Me</span>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm lg:text-base">Fast turnaround with quality results</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm lg:text-base">Modern technologies and best practices</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm lg:text-base">Dedicated support throughout the project</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm lg:text-base">Privacy-focused communication</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <div className="space-y-4">
                  <div className="group p-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-slate-200 transition-colors">
                        <Mail className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Primary Contact</div>
                        <div className="text-slate-900 font-bold">itxnargiskhatun@gmail.com</div>
                      </div>
                    </div>
                  </div>


                  <div className="group p-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Response Time</div>
                        <div className="text-slate-900 font-bold">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="flex gap-3 justify-center lg:justify-start">
                  <SocialLink href="mailto:itxnargiskhatun@gmail.com" icon={Mail} label="Email" />
                  <SocialLink href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/" icon={Linkedin} label="LinkedIn" />
                  <SocialLink href="https://twitter.com/81283nargis" icon={Twitter} label="Twitter" />
                  <SocialLink href="https://github.com/itxnargis" icon={Github} label="GitHub" />
                </div>

                {/* <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-4 h-4 text-slate-600" />
                    <span className="text-sm font-semibold text-slate-700">Additional Contact Options</span>
                  </div>
                  <div className="space-y-2">
                    {!showWhatsApp && (
                      <button
                        onClick={revealWhatsApp}
                        className="w-full text-left p-2 text-sm text-slate-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp (Click to reveal)
                        <Eye className="w-3 h-3 ml-auto" />
                      </button>
                    )}
                    {showWhatsApp && (
                      <button
                        onClick={handleWhatsAppClick}
                        className="w-full text-left p-2 text-sm bg-green-50 text-green-700 rounded border border-green-200 hover:bg-green-100 transition-colors flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Open WhatsApp Chat
                        <ExternalLink className="w-3 h-3 ml-auto" />
                      </button>
                    )}
                  </div>
                </div> */}
              </div>

              <div id="contact-form" className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="p-6 lg:p-8 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-amber-500" />
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900">Send a Message</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700 mb-2 block">
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 pl-12 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-800 transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2 block">
                        Your Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 pl-12 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-800 transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2 block">
                        Your Message
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 pl-12 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-800 transition-all duration-300 resize-none"
                          placeholder="Tell me about your project..."
                        ></textarea>
                        <MessageSquare className="absolute left-4 top-6 text-slate-400" size={18} />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                      <div className="relative flex items-center">
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                            Send Message
                            <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                          </>
                        )}
                      </div>
                    </button>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Shield className="w-3 h-3" />
                      <span>Your information is kept private and secure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isSubmitted && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg animate-bounce flex items-center z-50">
            <CheckCircle className="mr-3" size={20} />
            <div>
              <div className="font-bold">Message sent successfully!</div>
              <div className="text-sm opacity-90">I'll get back to you soon.</div>
            </div>
          </div>
        )}
      </section>
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

export default Contact