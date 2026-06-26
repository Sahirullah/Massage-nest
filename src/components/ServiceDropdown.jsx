import React, { useState, useRef } from 'react'
import './ServiceDropdown.css'

const ServiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const services = [
    'DEEP TISSUE MASSAGE IN DUBAI',
    'MOBILE MASSAGE IN DUBAI',
    'SPORTS MASSAGE IN DUBAI',
    'COUPLES MASSAGE IN DUBAI',
    'THAI MASSAGE IN DUBAI',
    'MADEROTHERAPY MASSAGE IN DUBAI',
    'RELAXATION MASSAGE IN DUBAI'
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
            <a 
              href="#" 
              key={index} 
              className="dropdown-item" 
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(false)
              }}
            >
              {service}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default ServiceDropdown
