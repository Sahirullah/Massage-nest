import logo from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import img1 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/12929.jpg'
import img2 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/13225.jpg'
import img3 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/2132.jpg'
import img4 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/2247-1.jpg'
import img5 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/46171.jpg'
import img6 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/5.jpg'
import img7 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/562.jpg'
import img8 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/7513.jpg'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src={logo} alt="Massage Nest Logo" className="logo" />
            <h1>Massage Nest</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Relax & Rejuvenate</h2>
            <p>Experience the best massage services at the comfort of your home</p>
            <button className="cta-button">Book Now</button>
          </div>
          <div className="hero-image">
            <img src={heroSec} alt="Massage Service" />
          </div>
        </div>
      </section>

      <section className="amenities">
        <div className="amenities-container">
          <p className="section-label">EXPERTISE AREAS</p>
          <h2>Amenities at our spa</h2>
          <p className="amenities-description">
            At Massage Nest, we bring the luxury of a spa, ensuring maximum comfort and convenience. With premium massage beds, aromatic oils, soothing music, and tranquil ambiance, every session is a journey towards complete bliss.
          </p>
          <p className="amenities-description">
            Whether you've had a long day at work or seeking relief from the strains of pregnancy, our massage services are here to alleviate your discomfort. Don't wait any longer – experience the unparalleled relaxation of Massage Nest today.
          </p>
          <p className="brand-name">MASSAGE NEST</p>
        </div>
      </section>

      <section className="massage-types">
        <div className="massage-types-container">
          <h2>Different Types of Massage Provided By Us</h2>
          
          <div className="massage-grid">
            <div className="massage-card">
              <img src={img3} alt="Thai Massage" />
              <h3>Thai Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card">
              <img src={img4} alt="Couple Massage" />
              <h3>Couple massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card">
              <img src={img5} alt="Sport Massage" />
              <h3>Sport Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card">
              <img src={img8} alt="Mobile Massage" />
              <h3>Mobile Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card">
              <img src={img6} alt="Maderotherapy Massage" />
              <h3>Maderotherapy Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card">
              <img src={img7} alt="Deep Tissue Massage" />
              <h3>Deep Tissue Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card">
              <img src={img2} alt="Relaxation Massage" />
              <h3>Relaxation Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>

            <div className="massage-card">
              <img src={img1} alt="Swedish Massage" />
              <h3>Swedish Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
