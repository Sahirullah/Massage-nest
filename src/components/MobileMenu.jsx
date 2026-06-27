import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import ServiceDropdown from './ServiceDropdown'
import './MobileMenu.css'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="mobile-menu-wrapper">
      <button className="hamburger-btn" onClick={toggleMenu}>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>✕</button>
        
        <div className="menu-header">
          <img src={logo} alt="Shukran Home Spa" className="menu-logo" />
        </div>

        <ul>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li className="mobile-dropdown-item">
            <ServiceDropdown />
          </li>
          <li><Link to="/packages" onClick={closeMenu}>Our Packages</Link></li>
          <li><a href="#blog" onClick={closeMenu}>Our Blog</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
        </ul>

        <button className="menu-book-btn" onClick={closeMenu}>BOOK AN APPOINTMENT →</button>
      </nav>
    </div>
  )
}
