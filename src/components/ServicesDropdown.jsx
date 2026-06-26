import { useState } from 'react'
import './ServicesDropdown.css'

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    'Deep Tissue Massage in Dubai',
    'Mobile Massage in Dubai',
    'Sports Massage in Dubai',
    'Couples Massage in Dubai',
    'Thai Massage in Dubai',
    'Maderotherapy Massage in Dubai',
    'Relaxation Massage in Dubai',
  ]

  return (
    <div className="services-dropdown">
      <button 
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        OUR SERVICES
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          {services.map((service, index) => (
            <a key={index} href="#" className="dropdown-item">
              {service}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
