import React from 'react'

const Navigationbar = () => {
  return (
    <nav className="container">

    <div className="logo">
    <img src="./images/original.png" alt="Logo" />

    </div>

    <ul>

      <li href = "#">Home</li>
      <li href = "#">About</li>
      <li href = "#">Menu</li>
      <li href = "#">Contact</li>

    </ul>

    <button id="login">
      Login
    </button>
   </nav>
  )
}

export default Navigationbar
