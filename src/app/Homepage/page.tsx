import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import Hero from './Hero';
import SecondSec from './SecondSec';

const HomePage  = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
      <SecondSec/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage; 
