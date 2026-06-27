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
            <h1 className="contact-hero-title">Contact Us</h1>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Whether you have a question about our services or want to book an appointment, feel free to reach out.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <h4>📞 Phone</h4>
                  <p><a href="tel:+971504480363">+971 50 448 0363</a></p>
                </div>
                
                <div className="info-item">
                  <h4>📧 Email</h4>
                  <p><a href="mailto:shukrianhomespa@gmail.com">shukrianhomespa@gmail.com</a></p>
                </div>
                
                <div className="info-item">
                  <h4>📍 Address</h4>
                  <p>Dubai, UAE</p>
                </div>
                
                <div className="info-item">
                  <h4>⏰ Hours</h4>
                  <p>Monday - Sunday: 9:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="social-section">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#facebook" className="social-icon">f</a>
                  <a href="#instagram" className="social-icon">📷</a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form">
                <h2>Send us a Message</h2>
                
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" required />
                </div>
                
                <div className="form-group">
                  <input type="text" placeholder="Service Interested In" />
                </div>
                
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
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
