import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import imgIndulge from '../assets/Indulge in Tranquility.jpg'
import imgSerenity from '../assets/Experience Serenity.jpg'
import imgConvenience from '../assets/Unlock the Convenience.jpg'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import './RelaxationMassage.css'

export default function RelaxationMassage() {
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

        <div className="service-hero-section">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Relaxation Massage in Dubai</h1>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="service-content">
        <div className="service-container">
          
          {/* Section 1: Indulge in Tranquility */}
          <div className="content-block">
            <div className="content-text">
              <h2>Indulge in Tranquility with Relaxation Massage in Dubai</h2>
              <p>In today's fast-paced world, stress can take on an unrelenting presence in our daily lives. With the countless demands of life, finding moments of relaxation is a must for mental well-being. Enter relaxation massage—a restorative art form that helps calm the mind, body and spirit, offering respite from the pressures of daily life. Through gentle kneading, long flowing strokes, and therapeutic techniques, our therapists will help you achieve ultimate relaxation, enhancing both circulation and comfort for the mental system.</p>
              <p>At Click4Massage, we understand the need for relaxation and rejuvenation. Our relaxation massage therapy services are designed to provide exactly that—a therapeutic escape within your own home.</p>
              <a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="service-btn">BOOK NOW</a>
            </div>
            <div className="content-image">
              <img src={imgIndulge} alt="Indulge in Tranquility" />
            </div>
          </div>

          {/* Section 2: Experience Serenity */}
          <div className="content-block">
            <div className="content-image">
              <img src={imgSerenity} alt="Experience Serenity" />
            </div>
            <div className="content-text">
              <h2>Experience Serenity with Our Relaxation Massage in Dubai</h2>
              <p>Our skilled therapists employ gentle, deliberate movements to create a tranquil atmosphere, allowing you to unwind fully and let go of stress.</p>
              <p>Focusing on each pose to direct and release tension—such as the neck, shoulders, and back—our therapist will help you achieve the serenity and rejuvenation you're seeking in every massage session.</p>
            </div>
          </div>

          {/* Section 3: Unlock the Convenience */}
          <div className="content-block">
            <div className="content-text">
              <h2>Unlock the Convenience of At-Home Relaxation in Dubai</h2>
              <p>Imagine the luxury of indulging in a rejuvenating massage in the privacy of your own home. With Click4Massage, we understand the challenging of modern life, which is why we bring the spa experience directly to you. No need to travel; no need to book appointments months in advance. With Click4Massage's at-home relaxation massage services, you'll experience the ultimate convenience and comfort of a therapeutic massage without having to leave home. Say goodbye to stress and tension—simply unwind at home, and watch as your worries melt away.</p>
            </div>
            <div className="content-image">
              <img src={imgConvenience} alt="Unlock the Convenience" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section" style={{ backgroundImage: `url(${heroSec})` }}>
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <p className="section-label-white">CLICK4MASSAGE</p>
          <h2>Book Your Serenity Session Today!</h2>
          <p>If the weight of the world has you feeling weary, it's time to prioritize your well-being and indulge with a session of relaxation massage services. Our dedicated therapists at Click4Massage are trained to ensure you receive the ultimate benefits of Maderotherapy. Book your appointment with us today and experience that only Click4Massage can deliver.</p>
          <a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="cta-button">BOOK AN APPOINTMENT →</a>
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
                  <li><Link to="/deep-tissue-massage">Deep Tissue Massage</Link></li>
                  <li><Link to="/mobile-massage">Mobile Massage</Link></li>
                  <li><Link to="/sports-massage">Sports Massage</Link></li>
                  <li><Link to="/couples-massage">Couples Massage</Link></li>
                  <li><Link to="/thai-massage">Thai Massage</Link></li>
                  <li><Link to="/maderotherapy-massage">Maderotherapy Massage</Link></li>
                  <li><Link to="/relaxation-massage">Relaxation Massage</Link></li>
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
