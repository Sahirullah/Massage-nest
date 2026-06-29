import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import ServiceDropdown from './ServiceDropdown'
import './MobileMenu.css'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleClose = (e) => {
    e?.preventDefault?.()
    e?.stopPropagation?.()
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className="mobile-menu-wrapper">
      <button 
        className="hamburger-btn" 
        onClick={handleToggle}
        aria-label="Toggle menu"
      >
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
      </button>

      {isOpen && (
        <div className="menu-overlay" onClick={handleClose}></div>
      )}

      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="menu-top">
          <div className="menu-header">
            <img src={logo} alt="Click4Massage" className="menu-logo" />
          </div>
          <button 
            className="close-btn" 
            onClick={handleClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul>
          <li><Link to="/" onClick={handleClose}>Home</Link></li>
          <li><Link to="/about" onClick={handleClose}>About Us</Link></li>
          <li className="mobile-dropdown-item">
            <ServiceDropdown />
          </li>
          <li><Link to="/packages" onClick={handleClose}>Our Packages</Link></li>
          <li><Link to="/blog" onClick={handleClose}>Our Blog</Link></li>
          <li><Link to="/contact" onClick={handleClose}>Contact Us</Link></li>
        </ul>

        <button 
          className="menu-book-btn" 
          onClick={handleClose}
        >
          BOOK AN APPOINTMENT →
        </button>
      </nav>
    </div>
  )
}
