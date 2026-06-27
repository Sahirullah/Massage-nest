import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <header className="header desktop-header" style={{ backgroundImage: `url(${heroSec})` }}>
        <div className="header-top">
          <div className="logo-section">
            <img src={logo} alt="Shukran Home Spa Logo" className="logo" />
            <span className="logo-text">Shukran Home Spa</span>
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
          <MobileMenu />
        </div>

        <div className="contact-hero-section">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact us</h1>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-wrapper">
            {/* Left Side - Appointment Info */}
            <div className="contact-left">
              <div className="waiting-text">WHAT ARE YOU WAITING FOR...</div>
              
              <h2 className="appointment-title">Make an appointment</h2>
              
              <div className="info-block">
                <h4 className="info-label">📍 OUR LOCATION</h4>
                <p className="info-value">Dubai</p>
              </div>

              <div className="info-block">
                <h4 className="info-label">⏰ OPENING HOURS</h4>
                <p className="info-value">11am to 10pm</p>
              </div>

              <div className="info-block">
                <h4 className="info-label">📞 CONTACT</h4>
                <p className="contact-item">Phone: <a href="tel:+971504480363">+971504480363</a></p>
                <p className="contact-item">Email: <a href="mailto:shukrianhomespa@gmail.com">shukrianhomespa@gmail.com</a></p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-right">
              <h2 className="quote-title">Get a free quote</h2>
              <div className="quote-divider"></div>
              
              <form className="contact-form">
                <div className="form-row">
                  <input type="text" placeholder="Your Name*" required />
                  <input type="text" placeholder="Last name*" required />
                </div>
                
                <input type="tel" placeholder="Phone Number*" required />
                <input type="email" placeholder="Email*" required />
                <textarea placeholder="Message" rows="6"></textarea>
                
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="Shukran Home Spa Location - Islamabad"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.3245652234974!2d74.35873587346153!3d33.72345467346153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07e6d65d5%3A0x6b0e0d0e0d0e0d0e!2sIslamabad!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Footer */}
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
                  <li><Link to="/packages">Our Packages</Link></li>
                  <li><Link to="/blog">Our Blogs</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#service1">Deep Tissue Massage</a></li>
                  <li><a href="#service2">Mobile Massage</a></li>
                  <li><a href="#service3">Sports Massage</a></li>
                  <li><a href="#service4">Couples Massage</a></li>
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
          <p>&copy;2024 Shukran Home Spa. All Rights Reserved.</p>
          <p>Website Development By | Rankon Technologies</p>
        </div>
      </footer>

      <a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <img src={whatsappBtn} alt="Chat on WhatsApp" />
      </a>
    </>
  )
}
