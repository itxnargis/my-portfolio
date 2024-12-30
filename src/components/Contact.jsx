import React, { useState } from 'react'
import { Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const onSubmitHandle = (e) => {
    e.preventDefault()
    console.log("Form submitted", formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span className="hidden sm:block w-24 h-[2px] bg-amber-400"></span>
          <h2 className="text-3xl !leading-normal sm:text-4xl font-bold mx-4 bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Contact Me
          </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-400"></span>
        </div>

        <div className="max-w-lg mx-auto space-y-6">
          <form onSubmit={onSubmitHandle} className='flex flex-col space-y-4 p-6 bg-gray-400 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300'>

          <p className='text-gray-900 font-semibold'>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
            <div>
              <input
                type="text"
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 bg-gray-800/90 text-gray-100 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300'
                placeholder='Your Name'
              />
            </div>
            <div>
              <input
                type="email"
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 bg-gray-800/90 text-gray-100 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300'
                placeholder='Your Email Address'
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 text-gray-100 bg-gray-800/90 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300'
                placeholder='Your Message'
              ></textarea>
            </div>

            <button className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
              Send Message
              <Send className='w-5 h-5 ml-2' />
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
