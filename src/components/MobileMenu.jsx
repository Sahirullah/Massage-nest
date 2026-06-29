import { useState } from 'react'
import './MobileMenu.css'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="mobile-hamburger" onClick={() => setIsOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && <div className="mobile-overlay" onClick={() => setIsOpen(false)}></div>}
      
      {isOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setIsOpen(false)}>✕</button>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Our Services</a>
            <a href="/packages">Our Packages</a>
            <a href="/blog">Our Blog</a>
            <a href="/contact">Contact Us</a>
          </nav>
          <button className="mobile-book">BOOK AN APPOINTMENT →</button>
        </div>
      )}
    </>
  )
}
