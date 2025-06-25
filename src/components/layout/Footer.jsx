import { Github, Linkedin, Mail, Twitter, ArrowUp, Heart, Code2, Coffee, ExternalLink, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

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
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-base-100 to-base-200 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute w-48 lg:w-64 h-48 lg:h-64 border border-white/10 rounded-full opacity-20 transition-transform duration-[4000ms] ease-in-out hidden md:block"
          style={{
            top: '10%',
            right: '5%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(45deg)`
          }}
        ></div>
        <div
          className="absolute w-32 lg:w-40 h-32 lg:h-40 border border-white/5 rounded-full opacity-30 transition-transform duration-[3000ms] ease-in-out hidden md:block"
          style={{
            bottom: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px) rotate(-30deg)`
          }}
        ></div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full opacity-40 animate-pulse hidden lg:block"
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${2 + i * 0.3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            <div className="text-center mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4 hover:bg-white/15 transition-all duration-300">
                <div className="relative">
                  <div className="w-2 lg:w-3 h-2 lg:h-3 bg-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 w-2 lg:w-3 h-2 lg:h-3 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-emerald-300 font-bold text-sm lg:text-base">
                  Let's Connect & Build Together
                </span>
                <Sparkles className="w-4 lg:w-5 h-4 lg:h-5 text-emerald-400 animate-pulse" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-slate-300 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
                I'm always excited to work on new challenges and contribute to innovative projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
              <ContactCard 
                icon={Mail} 
                label="Email Me" 
                value="itxnargiskhatun@gmail.com"
                href="mailto:itxnargiskhatun@gmail.com"
                color="emerald"
              />
              <ContactCard 
                icon={Linkedin} 
                label="Message Me" 
                value="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/"
                href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/"
                color="blue"
              />
              <ContactCard 
                icon={Twitter} 
                label="Connect on Twitter" 
                value="https://twitter.com/81283nargis"
                href="https://twitter.com/81283nargis"
                color="amber"
              />
              <ContactCard 
                icon={Code2} 
                label="Available For" 
                value="Full-time Opportunities"
                href="#"
                color="purple"
              />
            </div>

            <div className="flex flex-col items-center mb-8 lg:mb-12">
              <h4 className="text-lg lg:text-xl font-bold text-white mb-6 flex items-center gap-2">
                Follow My Journey
                <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              </h4>
              
              <div className="flex gap-4 lg:gap-6 mb-6">
                <EnhancedSocialLink 
                  href="https://github.com/itxnargis" 
                  icon={Github} 
                  label="GitHub"
                  description="Check out my repositories"
                />
                <EnhancedSocialLink 
                  href="mailto:itxnargiskhatun@gmail.com" 
                  icon={Mail} 
                  label="Email"
                  description="Send me a message"
                />
                <EnhancedSocialLink 
                  href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/" 
                  icon={Linkedin} 
                  label="LinkedIn"
                  description="Let's connect professionally"
                />
                <EnhancedSocialLink 
                  href="https://twitter.com/81283nargis" 
                  icon={Twitter} 
                  label="Twitter"
                  description="Follow my updates"
                />
              </div>

              <div className="flex gap-6 lg:gap-8 text-center">
                <div className="group">
                  <div className="text-2xl lg:text-3xl font-black text-emerald-400 mb-1 group-hover:scale-110 transition-transform">5+</div>
                  <div className="text-xs lg:text-sm text-slate-400 font-medium">Projects</div>
                </div>
                <div className="w-px bg-slate-600"></div>
                <div className="group">
                  <div className="text-2xl lg:text-3xl font-black text-amber-400 mb-1 group-hover:scale-110 transition-transform">8.0</div>
                  <div className="text-xs lg:text-sm text-slate-400 font-medium">CGPA</div>
                </div>
                <div className="w-px bg-slate-600"></div>
                <div className="group">
                  <div className="text-2xl lg:text-3xl font-black text-blue-400 mb-1 group-hover:scale-110 transition-transform">2024</div>
                  <div className="text-xs lg:text-sm text-slate-400 font-medium">Graduate</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span className="text-sm font-semibold">Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <span>&copy; {currentYear} Nargis Khatun. All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-400" />
                <span>in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const ContactCard = ({ icon: Icon, label, value, href, color }) => {
  const colorClasses = {
    emerald: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
    amber: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-400',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400'
  }

  const iconColorClasses = {
    emerald: 'bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30',
    blue: 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30',
    amber: 'bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30',
    purple: 'bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30'
  }

  const Component = href === '#' ? 'div' : 'a'
  const linkProps = href !== '#' ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {}

  return (
    <Component
      {...linkProps}
      className={`group p-4 lg:p-6 bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm border rounded-xl lg:rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
    >
      <div className="flex items-center gap-3 lg:gap-4">
        <div className={`p-2 lg:p-3 ${iconColorClasses[color]} rounded-xl group-hover:scale-110 transition-all duration-300`}>
          <Icon className="w-4 lg:w-5 h-4 lg:h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-slate-300 font-semibold uppercase tracking-wide">{label}</div>
          <div className="text-white font-bold text-xs lg:text-sm group-hover:text-slate-200 transition-colors truncate">
            {value}
          </div>
        </div>
        {href !== '#' && (
          <ExternalLink className="w-3 lg:w-4 h-3 lg:h-4 text-slate-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
        )}
      </div>
    </Component>
  )
}

const EnhancedSocialLink = ({ href, icon: Icon, label, description }) => (
  <div className="group relative">
    <a
      href={href}
      className="relative w-12 lg:w-14 h-12 lg:h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 shadow-lg overflow-hidden"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <Icon size={18} className="lg:w-6 lg:h-6 relative z-10 group-hover:scale-110 transition-transform" />
    </a>
    
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
      <div className="font-semibold">{label}</div>
      <div className="text-slate-300">{description}</div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
    </div>
  </div>
)

export default Footer