import { Link } from 'react-router-dom'
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
import MobileMenu from './components/MobileMenu'
import './App.css'

function App() {
  return (
    <>
      <header className="header" style={{backgroundImage: `url(${heroSec})`}}>
        <div className="header-top">
          <div className="logo-section">
            <img src={logo} alt="Shukran Home Spa Logo" className="logo" />
            <span className="logo-text"></span>
          </div>
          <nav className="nav desktop-nav">
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><ServiceDropdown /></li>
              <li><a href="#packages">OUR PACKAGES</a></li>
              <li><a href="#blog">OUR BLOG</a></li>
              <li><a href="#contact">CONTACT US</a></li>
              <li><a href="#book" className="book-btn">BOOK NOW</a></li>
            </ul>
          </nav>
          <MobileMenu />
        </div>

        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Relax with Our Premium Massage Home Service in Dubai</h1>
              <p>Shukran Home Spa is your oasis of calm in the bustling city of Dubai. Escape the daily chaos and immerse yourself in moments of pure relaxation with our top-notch massage services.</p>
              <button className="appointment-btn">BOOK AN APPOINTMENT →</button>
            </div>
          </div>
        </div>
      </header>

      <section className="amenities">
        <div className="amenities-container">
          <h2>Amenities at our spa</h2>
          <p>At Massage Nest, we bring the luxury of a spa, ensuring maximum comfort and convenience. With premium massage beds, aromatic oils, soothing music, and tranquil ambiance, every session is a journey towards complete bliss.</p>
        </div>
      </section>

      <section className="massage-types">
        <div className="massage-types-container">
          <h2>Different Types of Massage Provided By Us</h2>
          
          <div className="massage-grid">
            <div className="massage-card">
              <img src={img1} alt="Thai Massage" />
              <h3>Thai Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card">
              <img src={img2} alt="Couple Massage" />
              <h3>Couple Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card">
              <img src={img3} alt="Sport Massage" />
              <h3>Sport Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
            
            <div className="massage-card">
              <img src={img5} alt="Mobile Massage" />
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
              <img src={img8} alt="Relaxation Massage" />
              <h3>Relaxation Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>

            <div className="massage-card">
              <img src={img4} alt="Hot Stone Massage" />
              <h3>Hot Stone Massage</h3>
              <a href="#" className="view-details">View Details</a>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="why-choose-wrapper">
          <div className="why-choose-container">
            <div className="why-choose-content">
              <h2>Why Choose Shukran Home Spa for Your Wellness Needs?</h2>
              <h2 style={{fontSize: '2rem', color: '#1a1a1a', marginTop: '0', marginBottom: '1rem', fontWeight: 600, lineHeight: 1.2}}>Give yourself the well-deserved treatment</h2>
              <p>Experience the expertise of our professional therapists who specialize in delivering unique spa experiences tailored to your needs. Let our skilled hands melt away the stresses of your day, leaving you feeling refreshed, rejuvenated, and renewed.</p>
              <p>Indulge in a variety of massage options designed to address every ache, pain, and tension. From Thai Massage to Deep Tissue Massage, our range of services caters to all your relaxation needs.</p>
              <button className="book-btn">BOOK NOW</button>
            </div>

            <div className="why-choose-image">
              <img src={img9} alt="Professional Massage" />
            </div>

            <div className="benefits">
              <div className="benefit-item">
                <img src={wellnessIcon} alt="Wellness" className="benefit-icon" />
                <h3>Wellness</h3>
              </div>
              <div className="benefit-item">
                <img src={beautyIcon} alt="Beauty" className="benefit-icon" />
                <h3>Beauty</h3>
              </div>
              <div className="benefit-item">
                <img src={massageIcon} alt="Massage" className="benefit-icon" />
                <h3>Massage</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta-container">
          <h2>Contact us Shukran Home Spa for the Best Massage At your Home</h2>
          <button className="cta-button-secondary">BOOK NOW</button>
        </div>
      </section>

      <section className="pricing">
        <div className="pricing-container">
          <h4>SHUKRAN HOME SPA</h4>
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
                    <p><a href="mailto:shukrianhomespa@gmail.com">shukrianhomespa@gmail.com</a></p>
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
              <img src={logo} alt="Shukran Home Spa" className="footer-logo-img" />
              <h3>Shukran Home Spa</h3>
              <p>Introducing Shukran Home Spa, your premier destination for achieving your wellness goals right in the comfort of your own home.</p>
            </div>

            <div className="footer-links-section">
              <div className="footer-col">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><a href="#packages">Our Packages</a></li>
                  <li><a href="#blog">Our Blogs</a></li>
                  <li><a href="#contact">Contact Us</a></li>
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
                <p><a href="mailto:shukrianhomespa@gmail.com">📧 shukrianhomespa@gmail.com</a></p>
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
          <p>&copy;2026 Shukran Home Spa. All Rights Reserved.</p>
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
