import { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceDropdown from './ServiceDropdown'
import './MobileNav.css'

export default function MobileNav({ logo, logoText }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-header">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">{logoText}</span>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
        </button>
      </div>

      {isOpen && (
        <div className="mobile-nav-menu">
          <nav className="mobile-nav-links">
            <a href="/" onClick={closeMenu}>HOME</a>
            <Link to="/about" onClick={closeMenu}>ABOUT US</Link>
            <ServiceDropdown />
            <a href="#packages" onClick={closeMenu}>OUR PACKAGES</a>
            <a href="#blog" onClick={closeMenu}>OUR BLOG</a>
            <a href="#contact" onClick={closeMenu}>CONTACT US</a>
            <a href="#book" className="book-btn-mobile" onClick={closeMenu}>BOOK NOW</a>
          </nav>
        </div>
      )}
    </div>
  )
}
