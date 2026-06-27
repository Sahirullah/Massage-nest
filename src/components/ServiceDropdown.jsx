import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ServiceDropdown.css'

const ServiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const services = [
    { name: 'DEEP TISSUE MASSAGE IN DUBAI', path: '/deep-tissue-massage' },
    { name: 'MOBILE MASSAGE IN DUBAI', path: '#' },
    { name: 'SPORTS MASSAGE IN DUBAI', path: '#' },
    { name: 'COUPLES MASSAGE IN DUBAI', path: '#' },
    { name: 'THAI MASSAGE IN DUBAI', path: '#' },
    { name: 'MADEROTHERAPY MASSAGE IN DUBAI', path: '#' },
    { name: 'RELAXATION MASSAGE IN DUBAI', path: '#' }
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
            service.path !== '#' ? (
              <Link 
                to={service.path}
                key={index} 
                className="dropdown-item" 
                onClick={handleServiceClick}
              >
                {service.name}
              </Link>
            ) : (
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
            )
          ))}
        </div>
      )}
    </div>
  )
}

export default ServiceDropdown
