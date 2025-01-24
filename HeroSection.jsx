import React from 'react'
// import "./App.css";


const HeroSection = () => {
  return (
   <main className='Hero'>
    <div id='left'>
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p id='desc'>Your feet deserve the best and were here to help
        you with our shoes your feet deserve the best and were here to help your with our shoes.
      </p>

      <button id='shop-btn'>
        Shop Now
      </button>
      <button id='cat-btn'>
        Category
      </button>
      <p id='avail'>Also Available On </p>
      <div className="images">
        <img src="./images/ama-removebg-preview.png" alt="Flipcart" />
        <img src="./images/flip-removebg-preview.png" alt="Amazon" />
      </div>
     

    </div>

    <div id='right'>
      <img src="./images/nikeshoes.jpeg" alt="shoes" />

    </div>





   </main>
  )
}

export default HeroSection
