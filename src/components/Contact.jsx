import { Send } from 'lucide-react'
import React, { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      message: ''
    }
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const onSubmithandle = (e) => {
    e.preventDefault()
    console.log("From submitted", formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className='min-h-screen py-20 px-4'>
      <div className='container mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text transform transition-all duration-500 ease-in-out hover:scale-105'>Contact Me</h2>

        <form onSubmit={onSubmithandle} className='max-w-lg mx-auto'>
          <div className='mb-4'>
            <input type="text"
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300'
              placeholder='Your Name'
            />
          </div>
          <div className='mb-4'>
            <input type="text"
              id='name'
              name='name'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300'
              placeholder='Your Email Address'
            />
          </div>
          <div className='mb-4'>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300'
              placeholder='Your Message'
            ></textarea>
          </div>

          <button className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md flex justify-center items-center transition-colors duration-300 transform hover:scale-105'>
            Send Message
            <Send className='w-5 h-5 ml-2' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
