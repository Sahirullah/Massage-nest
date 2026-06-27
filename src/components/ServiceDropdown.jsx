import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ServiceDropdown.css'

const ServiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const services = [
    { name: 'DEEP TISSUE MASSAGE IN DUBAI', link: '/deep-tissue-massage' },
    { name: 'MOBILE MASSAGE IN DUBAI', link: '/mobile-massage' },
    { name: 'SPORTS MASSAGE IN DUBAI', link: '#' },
    { name: 'COUPLES MASSAGE IN DUBAI', link: '#' },
    { name: 'THAI MASSAGE IN DUBAI', link: '#' },
    { name: 'MADEROTHERAPY MASSAGE IN DUBAI', link: '#' },
    { name: 'RELAXATION MASSAGE IN DUBAI', link: '#' }
  ]

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  const handleServiceClick = () => {
    setIsOpen(false)
  }

  return (
    <div 
      className="service-dropdown" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="dropdown-trigger" 
        onClick={() => setIsOpen(!isOpen)}
      >
        OUR SERVICES
        <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {services.map((service, index) => (
            service.link === '#' ? (
              <a 
                href="#" 
                key={index} 
                className="dropdown-item" 
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                }}
              >
                {service.name}
              </a>
            ) : (
              <Link 
                to={service.link}
                key={index} 
                className="dropdown-item" 
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                {service.name}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  )
}

export default ServiceDropdown
