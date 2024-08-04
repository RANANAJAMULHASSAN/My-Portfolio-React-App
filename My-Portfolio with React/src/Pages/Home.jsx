import React from 'react'
import './Home.css'
import { HomePage } from './HomePage';
import { Education } from './Education';
import { Header } from '../Common/Header';
import { Skills } from './Skills';
import { Project } from './Project';
import { ContactUs } from './ContactUs';
import { Footer } from './Footer';
export const Home = () => {
  return (
    <>
      <Header />
      <HomePage />
      <section id="Education">
        <Education />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Project">
        <Project />
      </section>
      <section id="Contact">
        <ContactUs />
      </section>
      <Footer />
    </>
  )
}
