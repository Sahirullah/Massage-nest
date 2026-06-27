import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import './Packages.css'

export default function Packages() {
  const packages = [
    { name: 'Full Body Relaxation Massage', price: '149', duration: '(60 min 149 AED/ 90 min 199 AED)' },
    { name: 'Thai Massage', price: '199', duration: '( 60 min 199 AED / 90 min 249 AED)' },
    { name: 'Swedish Massage', price: '149', duration: '(60 min 149 AED/ 90 min 199 AED)' },
    { name: 'Deep Tissue Massage', price: '199', duration: '( 60 min 199 AED / 90 min 249 AED)' },
    { name: 'Maderotherapy Massage', price: '199', duration: '( 60 min 199 AED/ 90 min 249 AED)' },
    { name: 'Hot Oil Relaxation Massage', price: '175', duration: '(60 min 175 AED/ 90 min 225 AED)' },
    { name: 'Lymphatic Drainage Massage', price: '199', duration: '( 60 min 199 AED/ 90 min 249 AED)' },
    { name: 'Couple Relaxation Massage', price: '299', duration: '( 60 min couple massage 299 AED)' },
    { name: 'Sport Massage', price: '199', duration: '(60 min 199 AED/ 90 min 249 AED)' },
    { name: 'Lomi Lomi Massage', price: '149', duration: '( 60 min 149 AED/ 90 min 199 AED)' },
    { name: 'Brazilian Slimming Massage', price: '199', duration: '(60 min 199 AED/ 90 min 249 AED)' },
    { name: 'Shiatsu Massage', price: '199', duration: '(60 min 199 AED/ 90 min 249 AED)' }
  ]

  return (
    <>
      <header className="header desktop-header" style={{ backgroundImage: `url(${heroSec})` }}>
        <div className="header-top">
          <div className="logo-section">
            <img src={logo} alt="Click4Massage Logo" className="logo" />
            <span className="logo-text">Click4Massage</span>
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

        <div className="packages-hero-section">
          <div className="packages-hero-content">
            <h1 className="packages-hero-title">Our Massage Packages Plans</h1>
          </div>
        </div>
      </header>

      {/* Packages Section */}
      <section className="packages-section" data-aos="fade-up">
        <div className="packages-container">
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className="package-item" data-aos="fade-up" data-aos-delay={`${(index % 4) * 75}`}>
                <div className="package-name">{pkg.name}</div>
                <div className="package-details">
                  <span className="package-price">{pkg.price} AED</span>
                  <span className="package-duration">{pkg.duration}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="contact-packages-btn" data-aos="zoom-in">CONTACT US</button>
        </div>
      </section>

      {/* Footer */}
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
                  <li><a href="#service1">Deep Tissue Massage</a></li>
                  <li><a href="#service2">Mobile Massage</a></li>
                  <li><a href="#service3">Sports Massage</a></li>
                  <li><a href="#service4">Couples Massage</a></li>
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
