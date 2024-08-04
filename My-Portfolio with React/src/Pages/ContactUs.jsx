import React from 'react'
import './Contact.css'
export const ContactUs = () => {
  return (
    <>
      <section id="contact" className="contact-section">
        <h2 align="center">
        Contact<span> Me</span> </h2>
        <div className="group">

          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" cols="30" rows="10"></textarea>

            <button type="submit">Send Message</button>

          </form>
        </div>
        </section>


      </>
      )
}
