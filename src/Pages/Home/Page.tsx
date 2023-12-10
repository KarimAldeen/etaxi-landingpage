import React from 'react'
import Hero from '../Section/Hero'
import Offer from '../Section/Offer'
import Download from '../Section/Download'
import Cars from '../Section/Cars'
import Drivers from '../Section/Drivers'
import Clients from '../Section/Clients'
import Footer from '../../Layout/Ui/Footer'
import Header from '../../Layout/Ui/Header'

const Page = () => {
  return (
    <div className='Home_Page'>
      <Header/>
      <Hero/>
      <Offer/>
      <Download/>
      <Cars/>
      <Drivers/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default Page