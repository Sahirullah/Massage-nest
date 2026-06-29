import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import img1 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/1.jpg'
import img2 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/2.jpg'
import img3 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/3.jpg'
import img4 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/4.jpg'
import img5 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/5.jpg'
import img6 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/6.jpg'
import img7 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/7.jpg'
import img8 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/8.jpg'
import img9 from './assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/9.jpg'
import wellnessIcon from './assets/wellness.png'
import beautyIcon from './assets/beauty.png'
import massageIcon from './assets/massage.png'
import whatsappBtn from './assets/Whatsapp-btn.avif'
import ServiceDropdown from './components/ServiceDropdown'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <header className="header" style={{backgroundImage: `url(${heroSec})`}}>
        <div className="header-top">
          <div className="logo-section">
            <img src={logo} alt="Click4Massage Logo" className="logo" />
            <span className="logo-text"></span>
          </div>
          <nav className="nav desktop-nav">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><ServiceDropdown /></li>
              <li><Link to="/packages">OUR PACKAGES</Link></li>
              <li><Link to="/blog">OUR BLOG</Link></li>
              <li><Link to="/contact">CONTACT US</Link></li>
              <li><a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="book-btn">BOOK NOW</a></li>
            </ul>
          </nav>
          
          <button 
            className="hamburger-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {mobileMenuOpen && (
          <>
            <div 
              className="mobile-menu-overlay" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 999
              }}
            ></div>
            <nav 
              className="mobile-menu-panel"
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '85vw',
                maxWidth: '400px',
                height: '100vh',
                background: 'white',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                boxShadow: '-3px 0 15px rgba(0,0,0,0.2)'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '1rem',
                borderBottom: '1px solid #e0e0e0'
              }}>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    background: 'white',
                    border: '2px solid #5a9a92',
                    color: '#5a9a92',
                    fontSize: '1.6rem',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    borderRadius: '2px'
                  }}
                >
                  ✕
                </button>
              </div>

              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                margin: 0,
                flex: 1
              }}>
                <li style={{borderBottom: '1px solid #e0e0e0'}}><Link to="/" onClick={() => setMobileMenuOpen(false)} style={{display: 'block', padding: '1rem', color: '#5a9a92', textDecoration: 'none'}}>Home</Link></li>
                <li style={{borderBottom: '1px solid #e0e0e0'}}><Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{display: 'block', padding: '1rem', color: '#5a9a92', textDecoration: 'none'}}>About Us</Link></li>
                <li style={{borderBottom: '1px solid #e0e0e0', padding: 0}}><ServiceDropdown /></li>
                <li style={{borderBottom: '1px solid #e0e0e0'}}><Link to="/packages" onClick={() => setMobileMenuOpen(false)} style={{display: 'block', padding: '1rem', color: '#5a9a92', textDecoration: 'none'}}>Our Packages</Link></li>
                <li style={{borderBottom: '1px solid #e0e0e0'}}><Link to="/blog" onClick={() => setMobileMenuOpen(false)} style={{display: 'block', padding: '1rem', color: '#5a9a92', textDecoration: 'none'}}>Our Blog</Link></li>
                <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{display: 'block', padding: '1rem', color: '#5a9a92', textDecoration: 'none'}}>Contact Us</Link></li>
              </ul>

              <button 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: '#c9a961',
                  color: '#205B4F',
                  border: 'none',
                  padding: '1rem 1.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  margin: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                BOOK AN APPOINTMENT →
              </button>
            </nav>
          </>
        )}

        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Relax with Our Premium Massage Home Service in Dubai</h1>
              <p>Click4Massage is your oasis of calm in the bustling city of Dubai. Escape the daily chaos and immerse yourself in moments of pure relaxation with our top-notch massage services.</p>
              <button className="appointment-btn">BOOK AN APPOINTMENT →</button>
            </div>
          </div>
        </div>
      </header>

      <section className="amenities" data-aos="fade-up">
        <div className="amenities-container">
          <h2 data-aos="zoom-in">Amenities at our spa</h2>
          <p data-aos="fade-up" data-aos-delay="200">At Massage Nest, we bring the luxury of a spa, ensuring maximum comfort and convenience. With premium massage beds, aromatic oils, soothing music, and tranquil ambiance, every session is a journey towards complete bliss.</p>
        </div>
      </section>

      <section className="massage-types" data-aos="fade-up">
        <div className="massage-types-container">
          <h2 data-aos="zoom-in">Different Types of Massage Provided By Us</h2>
          
          <div className="massage-grid">
            <div className="massage-card" data-aos="fade-up" data-aos-delay="100">
              <img src={img1} alt="Thai Massage" />
              <h3>Thai Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card" data-aos="fade-up" data-aos-delay="200">
              <img src={img2} alt="Couple Massage" />
              <h3>Couple Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card" data-aos="fade-up" data-aos-delay="300">
              <img src={img3} alt="Sport Massage" />
              <h3>Sport Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card" data-aos="fade-up" data-aos-delay="400">
              <img src={img5} alt="Mobile Massage" />
              <h3>Mobile Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card" data-aos="fade-up" data-aos-delay="100">
              <img src={img6} alt="Maderotherapy Massage" />
              <h3>Maderotherapy Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card" data-aos="fade-up" data-aos-delay="200">
              <img src={img7} alt="Deep Tissue Massage" />
              <h3>Deep Tissue Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card" data-aos="fade-up" data-aos-delay="300">
              <img src={img8} alt="Relaxation Massage" />
              <h3>Relaxation Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>

            <div className="massage-card" data-aos="fade-up" data-aos-delay="400">
              <img src={img4} alt="Hot Stone Massage" />
              <h3>Hot Stone Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose" data-aos="fade-up">
        <div className="why-choose-wrapper">
          <div className="why-choose-container">
            <div className="why-choose-content" data-aos="slide-right">
              <h2 data-aos="zoom-in">Why Choose Click4Massage for Your Wellness Needs?</h2>
              <h2 style={{fontSize: '2rem', color: '#1a1a1a', marginTop: '0', marginBottom: '1rem', fontWeight: 600, lineHeight: 1.2}} data-aos="zoom-in" data-aos-delay="200">Give yourself the well-deserved treatment</h2>
            <p data-aos="fade-up" data-aos-delay="300">Experience the expertise of our professional therapists who specialize in delivering unique spa experiences tailored to your needs. Let our skilled hands melt away the stresses of your day, leaving you feeling refreshed, rejuvenated, and renewed.</p>
              <p data-aos="fade-up" data-aos-delay="400">Indulge in a variety of massage options designed to address every ache, pain, and tension. From Thai Massage to Deep Tissue Massage, our range of services caters to all your relaxation needs.</p>
              <button className="book-btn" data-aos="zoom-in" data-aos-delay="500">BOOK NOW</button>
            </div>

            <div className="why-choose-image" data-aos="slide-left">
              <img src={img9} alt="Professional Massage" />
            </div>

            <div className="benefits">
              <div className="benefit-item" data-aos="zoom-in" data-aos-delay="100">
                <img src={wellnessIcon} alt="Wellness" className="benefit-icon" />
                <h3>Wellness</h3>
              </div>
              <div className="benefit-item" data-aos="zoom-in" data-aos-delay="200">
                <img src={beautyIcon} alt="Beauty" className="benefit-icon" />
                <h3>Beauty</h3>
              </div>
              <div className="benefit-item" data-aos="zoom-in" data-aos-delay="300">
                <img src={massageIcon} alt="Massage" className="benefit-icon" />
                <h3>Massage</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta-container">
          <h2>Contact us Click4Massage for the Best Massage At your Home</h2>
          <button className="cta-button-secondary">BOOK NOW</button>
        </div>
      </section>

      <section className="pricing">
        <div className="pricing-container">
          <h4>CLICK4MASSAGE</h4>
          <h2>Our Home Massage Service Packages Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Full Body Relaxation Massage<span className="price">149 AED</span></h3>
              <span className="duration">(60 min 149 AED/ 90 min 189 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Thai Massage<span className="price">199 AED</span></h3>
              <span className="duration">(60 min 199 AED / 90 min 249 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Swedish Massage<span className="price">149 AED</span></h3>
              <span className="duration">(60 min 149 AED / 90 min 189 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Deep Tissue Massage<span className="price">199 AED</span></h3>
              <span className="duration">(60 min 199 AED / 90 min 249 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Maderotherapy Massage<span className="price">199 AED</span></h3>
              <span className="duration">(60 min 199 AED / 90 min 249 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Hot Oil Relaxation Massage<span className="price">175 AED</span></h3>
              <span className="duration">(60 min 175 AED / 90 min 225 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Lymphatic Drainage Massage<span className="price">199 AED</span></h3>
              <span className="duration">(60 min 199 AED / 90 min 249 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Couple Relaxation Massage<span className="price">299 AED</span></h3>
              <span className="duration">(60 min couple massage 299 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Sport Massage<span className="price">199 AED</span></h3>
              <span className="duration">(60 min 199 AED / 90 min 249 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Lomi Lomi Massage<span className="price">149 AED</span></h3>
              <span className="duration">(60 min 149 AED / 90 min 199 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Brazilian Slimming Massage<span className="price">199 AED</span></h3>
              <span className="duration">(60 min 199 AED / 90 min 249 AED)</span>
            </div>
            <div className="pricing-card">
              <h3>Shiatsu Massage<span className="price">199 AED</span></h3>
              <span className="duration">(60 min 199 AED / 90 min 249 AED)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="appointment">
        <div className="appointment-container">
          <div className="appointment-wrapper">
            <div className="appointment-left">
              <h4>WHAT ARE YOU WAITING FOR...</h4>
              <h2>Make an Appointment</h2>
              
              <div className="appointment-info">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <h4>OUR LOCATION</h4>
                    <p>Sharjah and Dubai</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon">⏰</span>
                  <div>
                    <h4>OPENING HOURS</h4>
                    <p>11am to 10pm</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon">☎️</span>
                  <div>
                    <h4>CONTACT</h4>
                    <p><a href="tel:+971504480363">+971504480363</a></p>
                    <p><a href="mailto:info.click4massage@gmail.com">info.click4massage@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="appointment-right">
              <form className="appointment-form">
                <div className="form-row">
                  <input type="text" placeholder="Your Name*" required />
                  <input type="text" placeholder="Last Name*" required />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Phone Number*" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email*" required />
                </div>
                <div className="form-row">
                  <textarea placeholder="Message" rows="5"></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-main">
            <div className="footer-logo-section">
              <img src={logo} alt="Click4Massage" className="footer-logo-img" />
              <h3>Click4Massage</h3>
              <p>Introducing Click4Massage, your premier destination for achieving your wellness goals right in the comfort of your own home.</p>
            </div>

            <div className="footer-links-section">
              <div className="footer-col">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/packages">Our Packages</Link></li>
                  <li><Link to="/blog">Our Blogs</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Deep Tissue Massage</a></li>
                  <li><a href="#">Mobile Massage</a></li>
                  <li><a href="#">Sports Massage</a></li>
                  <li><a href="#">Couples Massage</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Get In Touch</h4>
                <p><a href="tel:+971504480363">📞 +971504480363</a></p>
                <p><a href="mailto:info.click4massage@gmail.com">📧 info.click4massage@gmail.com</a></p>
                <p>📍 Address: Dubai</p>
                <div className="social-links">
                  <a href="#facebook">f</a>
                  <a href="#instagram">📷</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy;2026 Click4Massage. All Rights Reserved.</p>
          <p>Website Development By | Sahirullah</p>
        </div>
      </footer>

      <a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <img src={whatsappBtn} alt="Chat on WhatsApp" />
      </a>
    </>
  )
}

export default App
