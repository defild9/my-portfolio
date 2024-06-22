import React from 'react'
import ContactForm from '../ContactForm/ContactForm'

export default function ContactSection() {
  return (
    <div id="contact" className="flex flex-col items-center px-4 md:px-20 lg:px-40 py-20">
      <h2 className="text-4xl text-center underline underline-offset-8 font-semibold mb-5">
        Contact
      </h2>
      <div className="w-full flex justify-center">
        <ContactForm />
      </div>
    </div>
  )
}
