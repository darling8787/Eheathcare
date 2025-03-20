import React from 'react'
import ContactPage from '@/components/contact/ContactCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
function Contact() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <ContactPage />
        <Footer/>
    </div>
  )
}

export default Contact