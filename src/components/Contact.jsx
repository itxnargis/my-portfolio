import React, { useState } from 'react'
import { Send, User, Mail, MessageSquare, Sparkles, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted", formData)
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
          <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
        </div>
          <p className="text-xl max-w-2xl mx-auto mb-16">
            Ready to bring your ideas to life? Drop me a message and let's start the conversation!
          </p>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-gray-800 backdrop-filter rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <Sparkles className="w-8 h-8 text-amber-400 animate-spin-slow" />
                <h3 className="text-2xl font-semibold text-white">Why Reach Out?</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-2xl">🚀</span>
                  <span>Collaborate on groundbreaking projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-2xl">💡</span>
                  <span>Transform your ideas into reality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-2xl">🌟</span>
                  <span>Elevate your digital presence</span>
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-6 p-8 bg-gray-800 backdrop-filter rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-amber-400">
            <div className="relative group">
              <input
                type="text"
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 pl-12 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400'
                placeholder='Your Name'
              />
              <User className="absolute left-3 top-3 text-gray-400 group-hover:text-amber-400 transition-colors duration-300" size={20} />
            </div>

            <div className="relative group">
              <input
                type="email"
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 pl-12 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300'
                placeholder='Your Email Address'
              />
              <Mail className="absolute left-3 top-3 text-gray-400 group-hover:text-amber-400 transition-colors duration-300" size={20} />
            </div>

            <div className="relative group">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 pl-12 text-gray-100 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all duration-300'
                placeholder='Your Message'
              ></textarea>
              <MessageSquare className="absolute left-3 top-3 text-gray-400 group-hover:text-amber-600 transition-colors duration-300" size={20} />
            </div>

            <button
              type="submit"
              className='w-full bg-amber-500 hover:amber-400 font-bold py-3 px-6 text-white rounded-lg flex justify-center items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/20'
            >
              Send Message
              <Send className='w-5 h-5 ml-2 animate-pulse' />
            </button>

            {isSubmitted && (
              <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full animate-bounce flex items-center">
                <CheckCircle className="mr-2" size={20} />
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
