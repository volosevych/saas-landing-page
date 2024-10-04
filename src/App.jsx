import React from 'react'
import { Header, Hero, Features, Pricing, Faq, Testimonials, Download, Footer } from './index';

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonials/>
      <Download/>
      <Footer/>
    </main>
  )
}

export default App
