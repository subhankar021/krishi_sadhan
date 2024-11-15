import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* New Navbar with Logo at the Center and Menu Items */}
      <nav className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo ">KRISHI <span>SADHAN</span></div>
        
        {/* Menu Items */}
        <ul className="navbar-list">
          <li><a href="#about" className="navbar-item">About</a></li>
          <li><a href="#contact" className="navbar-item">Contact</a></li>
        </ul>
      </nav>
        
    </div>
  )
}

export default Navbar