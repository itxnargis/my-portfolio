import {
  ExternalLink,
  Github,
  Star,
  Code2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Eye,
  Award,
  TrendingUp,
  Filter,
  Layers,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

const featuredProjects = [
  {
    id: 1,
    title: "Chess Master",
    description:
      "A comprehensive web application offering various chess-playing modes, puzzles, and features for all levels.",
    longDescription:
      "Advanced chess platform with real-time multiplayer gaming, AI chess engine integration, and cross-platform compatibility. Features include puzzle solving, game analysis, and tournament modes.",
    image: "/chess-preview.gif",
    placeholder: "/placeholder.svg?height=400&width=600&text=Chess+Master",
    demoLink: "https://chess-frontend-dun.vercel.app/",
    codeLink: "https://github.com/itxnargis/chess-frontend",
    icon: "♟️",
    tags: ["React", "CSS", "JavaScript", "Socket.IO"],
    techStack: ["React", "JavaScript", "CSS"],
    primaryTech: "React",
    featured: true,
    status: "Live",
    year: "2025",
    category: "Gaming",
    type: "Web Application",
    highlights: ["Real-time multiplayer", "AI integration", "Cross-platform"],
  },
  {
    id: 2,
    title: "PrescripX - Healthcare System",
    description: "A web application for healthcare appointments and prescription management.",
    longDescription:
      "Complete healthcare management system with appointment booking, prescription tracking, and patient management. Built with modern React architecture and Firebase backend.",
    image: "/precripx-preview.gif",
    placeholder: "/placeholder.svg?height=400&width=600&text=Prescripto+Healthcare",
    demoLink: "https://prescripx.vercel.app",
    codeLink: "https://github.com/itxnargis/prescripx",
    icon: "🏥",
    tags: ["React", "Tailwind CSS", "Firebase", "Authentication"],
    techStack: ["React", "Firebase", "Tailwind CSS"],
    primaryTech: "React",
    featured: true,
    status: "Live",
    year: "2024",
    category: "Healthcare",
    type: "Web Application",
    highlights: ["Appointment booking", "Prescription management", "User authentication"],
  },
  {
  id: 3,
  title: "Memory Journal with Mood & Music",
  description:
    "A creative web app where users can save memories with mood emojis, music, and photos.",
  longDescription:
    "A full-stack memory journaling application that lets users capture special moments with photos, mood emojis, and song links. Features a timeline view, mood-based color themes, and secure PIN-based access for a personal experience.",
  image: "/memory-journal-preview.gif",
  placeholder: "/placeholder.svg?height=400&width=600&text=Memory+Journal",
  demoLink: "https://memory-diary-opal.vercel.app",
  codeLink: "https://github.com/itxnargis/memory-diary",
  icon: "📓",
  tags: ["React", "Node.js", "MongoDB", "Express", "Full-stack"],
  techStack: ["React", "Node.js", "MongoDB", "Express"],
  primaryTech: "MERN",
  featured: true,
  status: "Live",
  year: "2025",
  category: "Productivity",
  type: "Full-stack Application",
  highlights: [
    "Mood-based memories",
    "Music & photo support",
    "Secure PIN authentication",
  ],
}

  {
    id: 4,
    title: "Trendz Ecommerce Platform",
    description: "A full-featured MERN stack eCommerce platform with advanced features.",
    longDescription:
      "Complete ecommerce solution with product catalog, shopping cart, payment integration, and admin dashboard. Built using MERN stack with modern UI/UX design.",
    image: "/trendz-preview.gif",
    placeholder: "/placeholder.svg?height=400&width=600&text=Trendz+Ecommerce",
    demoLink: "https://trendz-ecommerce-tau.vercel.app",
    codeLink: "https://github.com/itxnargis/trendz-ecommerce-frontend",
    icon: "🛒",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    primaryTech: "MERN",
    featured: true,
    status: "Live",
    year: "2025",
    category: "E-commerce",
    type: "Full-stack Application",
    highlights: ["Full-stack MERN", "Payment integration", "Admin dashboard"],
  },
]

const additionalProjects = [
  {
    id: 5,
    title: "LiveChat - Real-Time Platform",
    description: "A real-time chat application built with React and Firebase.",
    image: "/live-chat-app.png",
    placeholder: "/placeholder.svg?height=300&width=400&text=LiveChat+App",
    demoLink: "https://live-chat-app-weld.vercel.app/",
    codeLink: "https://github.com/itxnargis/live-chat-app",
    icon: "💬",
    tags: ["React", "Firebase", "CSS", "Real-time"],
    techStack: ["React", "Firebase", "CSS"],
    primaryTech: "React",
    status: "Live",
    year: "2024",
    category: "Communication",
    type: "Web Application",
  },
  {
    id: 6,
    title: "Spotify Music Finder",
    description: "An app to identify songs and find their matches on Spotify.",
    image: "/spotify-preview.gif",
    placeholder: "/placeholder.svg?height=300&width=400&text=Spotify+Music+Finder",
    demoLink: "https://spotify-music-finder-inky.vercel.app",
    codeLink: "https://github.com/itxnargis/spotify-music-finder",
    icon: "🎵",
    tags: ["React", "Spotify API", "Tailwind CSS", "Music"],
    techStack: ["React", "Spotify API", "Tailwind CSS"],
    primaryTech: "React",
    status: "Live",
    year: "2024",
    category: "Entertainment",
    type: "Web Application",
  },
  {
    id: 7,
    title: "Resto Restaurant",
    description: "A demo website for a restaurant showcasing delicious flavors and cozy atmosphere.",
    image: "/resto-preview.gif",
    placeholder: "/placeholder.svg?height=300&width=400&text=Resto+Restaurant",
    demoLink: "https://itxnargis.github.io/resto-restaurant/",
    codeLink: "https://github.com/itxnargis/resto-restaurant",
    icon: "🍽️",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    techStack: ["HTML", "CSS", "JavaScript"],
    primaryTech: "Vanilla JS",
    status: "Live",
    year: "2024",
    category: "Business",
    type: "Static Website",
  },
  {
    id: 8,
    title: "Explore Lakshadweep",
    description: "An informative travel website for exploring the beauty of Lakshadweep.",
    placeholder: "/placeholder.svg?height=300&width=400&text=Explore+Lakshadweep",
    demoLink: "https://itxnargis.github.io/explore-lakshadweep/",
    codeLink: "https://github.com/itxnargis/explore-lakshadweep",
    icon: "🏝️",
    tags: ["HTML", "CSS", "JavaScript", "Travel"],
    techStack: ["HTML", "CSS", "JavaScript"],
    primaryTech: "Vanilla JS",
    status: "Live",
    year: "2024",
    category: "Travel",
    type: "Static Website",
  },
  {
    id: 9,
    title: "English Dictionary",
    description: "Instant word meanings with a clean, user-friendly interface.",
    placeholder: "/placeholder.svg?height=300&width=400&text=English+Dictionary",
    demoLink: "https://itxnargis.github.io/english-dictionary/",
    codeLink: "https://github.com/itxnargis/english-dictionary",
    icon: "📚",
    tags: ["HTML", "CSS", "JavaScript", "Dictionary API"],
    techStack: ["HTML", "CSS", "JavaScript"],
    primaryTech: "Vanilla JS",
    status: "Live",
    year: "2024",
    category: "Education",
    type: "Web Application",
  },
  {
    id: 10,
    title: "Grocery Bud",
    description: "Smart grocery list manager with local storage and easy editing.",
    placeholder: "/placeholder.svg?height=300&width=400&text=Grocery+Bud",
    demoLink: "https://itxnargis.github.io/grocery-bud/",
    codeLink: "https://github.com/itxnargis/grocery-bud",
    icon: "🛒",
    tags: ["React", "CSS", "Local Storage", "Productivity"],
    techStack: ["React", "CSS"],
    primaryTech: "React",
    status: "Live",
    year: "2024",
    category: "Productivity",
    type: "Web Application",
  },
]

const allProjects = [...featuredProjects, ...additionalProjects]

const OptimizedImage = ({ src, placeholder, alt, className, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative ${className}`} {...props}>
      <div
        className={`absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse transition-opacity duration-300 ${
          imageLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-slate-400 text-sm font-medium">Loading...</div>
        </div>
      </div>

      {isInView && (
        <img
          src={imageError ? placeholder : src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } ${className}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  )
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filterType, setFilterType] = useState("category")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const projectCategories = [
    "All",
    "E-commerce",
    "Healthcare",
    "Gaming",
    "Communication",
    "Entertainment",
    "Travel",
    "Education",
    "Productivity",
    "Business",
  ]
  const techCategories = ["All", "React", "MERN", "Vanilla JS", "Firebase", "Full-stack"]

  const currentCategories = filterType === "category" ? projectCategories : techCategories

  const getFilteredProjects = () => {
    if (selectedCategory === "All") return allProjects
    if (filterType === "category") {
      return allProjects.filter((project) => project.category === selectedCategory)
    } else {
      return allProjects.filter((project) => project.primaryTech === selectedCategory)
    }
  }

  const filteredProjects = getFilteredProjects()
  const filteredFeaturedProjects = filteredProjects.filter((project) => project.featured)

  useEffect(() => {
    setIsVisible(true)

    const criticalImages = featuredProjects.slice(0, 2).map((project) => project.image)
    criticalImages.forEach((src) => {
      if (src) {
        const img = new Image()
        img.src = src
      }
    })

    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        })
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleFilterTypeChange = (type) => {
    setFilterType(type)
    setSelectedCategory("All")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 border border-slate-200/40 rounded-full opacity-20 transition-transform duration-[5000ms] ease-in-out hidden lg:block"
          style={{
            top: "5%",
            right: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${mousePosition.x * 0.1}deg)`,
          }}
        />
        <div
          className="absolute w-64 h-64 border border-slate-300/30 rounded-full opacity-15 transition-transform duration-[4000ms] ease-in-out hidden lg:block"
          style={{
            bottom: "10%",
            left: "5%",
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px) rotate(${mousePosition.y * -0.1}deg)`,
          }}
        />
      </div>

      <div className="relative z-10">
        <section className="pt-20 pb-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm border-l-4 border-emerald-500 shadow-lg rounded-r-full hover:shadow-xl transition-all duration-300 group mb-8">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-emerald-700 font-bold">9+ Projects Built & Deployed</span>
                <Award className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-300 mb-6 leading-[0.9]">
                <span className="">My Projects</span>
                <br />
                <span className="text-amber-400 text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center gap-3 mt-4">
                  Building Digital Solutions
                  <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                From full-stack web applications to interactive games, explore my journey of turning ideas into
                <strong className="text-slate-100"> functional digital experiences</strong>. Each project represents my
                growth as a developer and my passion for creating meaningful solutions.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="p-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="text-2xl font-black text-slate-700 mb-1 group-hover:scale-110 transition-transform">
                    9+
                  </div>
                  <div className="text-slate-600 font-bold text-sm">Projects</div>
                </div>
                <div className="p-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="text-2xl font-black text-emerald-600 mb-1 group-hover:scale-110 transition-transform">
                    100%
                  </div>
                  <div className="text-slate-600 font-bold text-sm">Live</div>
                </div>
                <div className="p-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="text-2xl font-black text-amber-600 mb-1 group-hover:scale-110 transition-transform">
                    5+
                  </div>
                  <div className="text-slate-600 font-bold text-sm">Tech Stack</div>
                </div>
                <div className="p-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="text-2xl font-black text-blue-600 mb-1 group-hover:scale-110 transition-transform">
                    24/7
                  </div>
                  <div className="text-slate-600 font-bold text-sm">Available</div>
                </div>
              </div>
            </div>

            <div
              className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex justify-center">
                <div className="inline-flex bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-1 shadow-lg">
                  <button
                    onClick={() => handleFilterTypeChange("category")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      filterType === "category"
                        ? "bg-slate-900 text-white shadow-md"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                    By Category
                  </button>
                  <button
                    onClick={() => handleFilterTypeChange("tech")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      filterType === "tech" ? "bg-slate-900 text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <Code2 className="w-4 h-4" />
                    By Tech Stack
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Filter className="w-5 h-5 text-slate-600" />
                <span className="text-slate-600 font-semibold">
                  Filter {filterType === "category" ? "by Project Type" : "by Technology"}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {currentCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category
                        ? "bg-slate-900 text-white shadow-lg"
                        : "bg-white/80 text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="text-center mt-4">
                <span className="text-slate-600 text-sm">
                  Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
                  {selectedCategory !== "All" && <span className="font-semibold"> in {selectedCategory}</span>}
                </span>
              </div>
            </div>
          </div>
        </section>

        {filteredFeaturedProjects.length > 0 && (
          <section className="pb-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div
                className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl">
                    <Star className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-300">
                    {selectedCategory === "All" ? "Featured Projects" : `Featured ${selectedCategory} Projects`}
                  </h2>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-slate-300 to-transparent"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                {filteredFeaturedProjects.map((project, index) => (
                  <FeaturedProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="pb-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl">
                <Code2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-slate-300">
                {selectedCategory === "All" ? "All Projects" : `${selectedCategory} Projects`}
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-300 to-transparent"></div>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto mb-6 bg-slate-200 rounded-full flex items-center justify-center">
                  <Code2 className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-600 mb-2">No projects found</h3>
                <p className="text-slate-500">
                  No projects match your current filter. Try selecting a different{" "}
                  {filterType === "category" ? "category" : "technology"}.
                </p>
              </div>
            )}

            <div className="text-center mt-16">
              <div className="inline-block p-6 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl text-white hover:shadow-2xl transition-all duration-500 group">
                <div className="mb-4">
                  <Github className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">Explore More Projects</h3>
                  <p className="text-slate-300">Check out my GitHub for more projects and contributions</p>
                </div>
                <a
                  href="https://github.com/itxnargis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-800 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105"
                >
                  View GitHub Profile
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const FeaturedProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] ${
        index % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-8"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
        {project.status}
      </div>

      <div className="relative h-64 overflow-hidden">
        <OptimizedImage
          src={project.image}
          placeholder={project.placeholder}
          alt={project.title}
          className="transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div
          className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-500 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm">Live Demo</span>
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">Code</span>
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{project.icon}</span>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
            {project.title}
          </h3>
          <div className="ml-auto text-xs text-slate-500 font-semibold">{project.year}</div>
        </div>

        <p className="text-slate-700 mb-4 leading-relaxed">{project.longDescription || project.description}</p>

        {project.highlights && (
          <div className="mb-4 space-y-1">
            {project.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <ChevronRight className="w-3 h-3 text-amber-600" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
            {project.category} • {project.type}
          </span>
          <div className="flex items-center gap-1 text-amber-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Featured</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ project, index }) => (
  <div
    className={`group bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-fade-in`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {(project.image || project.placeholder) && (
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={project.image}
          placeholder={
            project.placeholder || "/placeholder.svg?height=300&width=400&text=" + encodeURIComponent(project.title)
          }
          alt={project.title}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 px-2 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
          {project.status}
        </div>
      </div>
    )}

    <div className="p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{project.icon}</span>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
          {project.title}
        </h3>
      </div>

      <p className="text-slate-700 mb-4 text-sm leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-1 mb-4">
        {project.tags.slice(0, 3).map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-medium">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 text-sm"
        >
          <ExternalLink className="w-3 h-3" />
          Demo
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 text-sm"
        >
          <Github className="w-3 h-3" />
          Code
        </a>
      </div>
    </div>
  </div>
)

export default Projects

const styles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
    opacity: 0;
  }
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}
