import React from 'react'
import Recycle from '../home/recycle.jpeg'
import Pickup from '../home/pickup.jpeg'
import CountUp from 'react-countup'

const Homepage = () => {
  return (
    <div>
    <section className="hero" id="hero">
     
      <div className="container">
      <h1>
        We are proud to have successfully recycled{' '}
        <CountUp className='countup'start={0} end={25000} duration={3} separator="," />
        + products, making a significant impact on reducing e-waste and protecting our environment!
      </h1>
        <h2>Manage Your E-Waste Responsibly</h2>
        <p>Join us in making the world a greener place by recycling your electronic waste.</p>
        <div className="hero-buttons">
          <a href="#learn-more" className="btn">Learn More</a>
          <a href="#get-started" className="btn">Get Started</a>
        </div>
      </div>
      
    </section>
    <section className="features" id="services">
    <div className="container">
      <h3>Our Services</h3>
      <div className="feature">
        <img src={Recycle} alt="Recycling" />
        <h4>Recycling</h4>
        <p>We ensure your e-waste is recycled responsibly.</p>
      </div>
      <div className="feature">
        <img src={Pickup} alt="Pickup"  />
        <h4>Pickup Services</h4>
        <p>We offer convenient pickup services for your e-waste.</p>
      </div>
    </div>
  </section>
  <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h3>How It Works</h3>
        <div className="step">
          <h4>Step 1</h4>
          <p>Schedule a pickup or drop-off.</p>
        </div>
        <div className="step">
          <h4>Step 2</h4>
          <p>We collect your e-waste.</p>
        </div>
        <div className="step">
          <h4>Step 3</h4>
          <p>We recycle your e-waste responsibly.</p>
        </div>
      </div>
    </section>
    
  </div>
  
  )
}

export default Homepage