import React from 'react'
import Process from'../about/process.png'

const About = () => {
  return (
    <div className="about-us-container">
      <h1>About E-Waste Management</h1>
      <p>
        E-Waste Management is dedicated to responsibly recycling electronic waste. Our mission is to reduce the environmental impact of e-waste by ensuring that it is recycled and disposed of in a sustainable manner. We provide various services including collection, recycling, and disposal of e-waste to minimize the harmful effects on our environment.
      </p>
      <h2>Our Process</h2>
      <p>
        Our comprehensive recycling process involves several stages to ensure that electronic waste is handled efficiently and safely:
      </p>
      <ul>
        <li>Collection: We collect e-waste from households, businesses, and drop-off locations.</li>
        <li>Sorting: The collected e-waste is sorted based on type and material composition.</li>
        <li>Dismantling: Electronic devices are dismantled to separate different components.</li>
        <li>Recycling: Components such as metals, plastics, and glass are recycled using specialized methods.</li>
        <li>Disposal: Non-recyclable materials are disposed of in an environmentally friendly manner.</li>
      </ul>
      <div className="process-photo-container">
        <img src={Process} alt="E-Waste Recycling Process" />
      </div>
      <h2>Why Choose Us</h2>
      <p>
        By choosing our services, you contribute to a cleaner and greener environment. We are committed to maintaining high standards of recycling and ensuring that e-waste is processed in the most sustainable way possible.
      </p>
      <h2>Contact Us</h2>
      <p>
        For more information about our services or to schedule a pickup, please contact us at:
        <br />
        <strong>Email:</strong> info@ewasteeco.com
        <br />
        <strong>Phone:</strong> (123) 456-7890
      </p>
    </div>
  )
}

export default About