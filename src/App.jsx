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
import './App.css'

function App() {
  return (
    <>
      <header className="header" style={{backgroundImage: `url(${heroSec})`}}>
        <div className="header-container">
          <div className="logo-section">
            <img src={logo} alt="Massage Nest Logo" className="logo" />
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#contact">CONTACT</a></li>
              <li><a href="#book" className="login-btn">LOGIN</a></li>
            </ul>
          </nav>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1>Relax with Our Premium Massage Home Service in Dubai</h1>
            <p>Experience the ultimate relaxation and rejuvenation with our professional massage therapists. We bring luxury and comfort to your home.</p>
            <button className="cta-button">BOOK NOW</button>
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
              <h2>Why Choose Massage Nest for the Best Massage At Your Home?</h2>
              <p>Experience the expertise of our professional therapists who specialize in delivering unique spa experiences tailored to your needs. Let our skilled hands melt away the stresses of your day, leaving you feeling refreshed, rejuvenated, and renewed.</p>
              <p>Indulge in a variety of massage options designed to address every ache, pain, and tension. From Thai Massage to Deep Tissue Massage, our range of services caters to all your relaxation needs.</p>
              <button className="book-btn">BOOK NOW</button>
            </div>

            <div className="why-choose-image">
              <img src={img4} alt="Professional Massage" />
              
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
          <h2>Our Home Massage Service Packages Class</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>30 MIN</h3>
              <p className="price">AED 99</p>
              <ul>
                <li>Swedish Massage</li>
                <li>Thai Massage</li>
                <li>Deep Tissue</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>60 MIN</h3>
              <p className="price">AED 189</p>
              <ul>
                <li>All 30 min services</li>
                <li>Hot Stone Massage</li>
                <li>Aromatherapy</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>90 MIN</h3>
              <p className="price">AED 269</p>
              <ul>
                <li>All 60 min services</li>
                <li>Reflexology</li>
                <li>Premium oils</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>120 MIN</h3>
              <p className="price">AED 349</p>
              <ul>
                <li>All services</li>
                <li>Facial massage</li>
                <li>Spa package</li>
              </ul>
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
