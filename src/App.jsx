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
import './App.css'

function App() {
  return (
    <>
      <header className="header" style={{backgroundImage: `url(${heroSec})`}}>
        <div className="header-top">
          <div className="logo-section">
            <img src={logo} alt="Shukran Home Spa Logo" className="logo" />
            <span className="logo-text">Shukran Home Spa</span>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#services">OUR SERVICES</a></li>
              <li><a href="#packages">OUR PACKAGES</a></li>
              <li><a href="#blog">OUR BLOG</a></li>
              <li><a href="#contact">CONTACT US</a></li>
              <li><a href="#book" className="book-btn">BOOK NOW</a></li>
            </ul>
          </nav>
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
                <div className="benefit-icon">🌿</div>
                <h3>Wellness</h3>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">✨</div>
                <h3>Beauty</h3>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🤝</div>
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
          <h2>Make an Appointment</h2>
          <form className="appointment-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone Number" required />
              <input type="date" required />
            </div>
            <div className="form-row">
              <select required>
                <option value="">Select Service</option>
                <option value="thai">Thai Massage</option>
                <option value="deep">Deep Tissue</option>
                <option value="couple">Couple Massage</option>
              </select>
              <select required>
                <option value="">Select Time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            <textarea placeholder="Special Requests" rows="4"></textarea>
            <button type="submit" className="submit-btn">BOOK APPOINTMENT</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
            </div>
            <p>Massage Nest brings luxury spa services to your home with professional therapists and premium care.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Thai Massage</a></li>
              <li><a href="#">Deep Tissue</a></li>
              <li><a href="#">Hot Stone</a></li>
              <li><a href="#">Aromatherapy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Social Links</h4>
            <ul className="social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Massage Nest. All rights reserved. | Powered by Massage Nest</p>
        </div>
      </footer>
    </>
  )
}

export default App
