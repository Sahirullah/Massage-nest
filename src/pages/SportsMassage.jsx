import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import img1 from '../assets/Sports1.jpg'
import img2 from '../assets/Sports2.jpg'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import './SportsMassage.css'

export default function SportsMassage() {
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
            <h1 className="service-hero-title">Sports Massage In Dubai</h1>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="service-content" data-aos="fade-up">
        <div className="service-container">
          
          {/* Intro Text */}
          <div className="intro-text" data-aos="fade-up">
            <p>Whether you're an athlete, fitness enthusiast, or someone recovering from injury, sports massage offers targeted relief.</p>
            <p>Our specialized sports massage therapists use proven techniques to enhance performance, accelerate recovery, and prevent injuries. Discover how sports massage can take your fitness to the next level.</p>
          </div>

          {/* Section 1: Sports Massage Benefits */}
          <div className="content-block" data-aos="slide-right">
            <div className="content-text">
              <h3 className="section-label">CLICK4MASSAGE</h3>
              <h2 data-aos="zoom-in">Sports Massage at Click4Massage</h2>
              <p>Our sports massage therapy is designed specifically for athletes and active individuals seeking to enhance performance while minimizing injury.</p>
              <p>From pre-event preparation to post-workout recovery, our certified sports massage therapists employ advanced techniques to optimize your body's potential and expedite recovery.</p>
              <a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="service-btn">CONTACT US</a>
            </div>
            <div className="content-image" data-aos="zoom-in">
              <img src={img1} alt="Sports Massage" />
            </div>
          </div>

          {/* Why Choose Section with Feature Cards */}
          <div className="why-choose-section" data-aos="fade-up">
            <h3 className="section-label">CLICK4MASSAGE</h3>
            <h2 data-aos="zoom-in">Experience the Benefits of Sports Massage at Click4Massage</h2>
            <p className="section-subtitle">Enhance your athletic performance with our specialized sports massage services.</p>
            
            <div className="features-grid">
              <div className="feature-card" data-aos="zoom-in" data-aos-delay="0">
                <div className="feature-icon">💪</div>
                <h4>Enhanced Flexibility</h4>
                <p>Sports massage increases range of motion and muscle elasticity, helping you achieve peak flexibility and powerful motion.</p>
              </div>
              <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
                <div className="feature-icon">⚡</div>
                <h4>Stress Reduction</h4>
                <p>Pre-event anxiety can impact performance. Our sports massage alleviates stress and boosts mental clarity for optimal performance.</p>
              </div>
              <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="feature-icon">🏆</div>
                <h4>Performance Improvement</h4>
                <p>By reducing lactic acid buildup and promoting circulation, sports massage enhances your athletic potential and power output.</p>
              </div>
              <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
                <div className="feature-icon">⚕️</div>
                <h4>Injury Prevention</h4>
                <p>Regular sports massage identifies problem areas before they become injuries, keeping you healthy and training consistently.</p>
              </div>
              <div className="feature-card" data-aos="zoom-in" data-aos-delay="400">
                <div className="feature-icon">🔄</div>
                <h4>Faster Recovery</h4>
                <p>Accelerate muscle recovery and reduce soreness after intense training or competition with targeted sports massage therapy.</p>
              </div>
              <div className="feature-card" data-aos="zoom-in" data-aos-delay="500">
                <div className="feature-icon">🎯</div>
                <h4>Personalized Treatment</h4>
                <p>Our therapists customize each session based on your sport, training goals, and specific problem areas.</p>
              </div>
            </div>
          </div>

          {/* Section 2: Customized Sports Massage */}
          <div className="content-block reverse" data-aos="slide-left">
            <div className="content-image" data-aos="zoom-in">
              <img src={img2} alt="Customized Sports Massage" />
            </div>
            <div className="content-text">
              <h3 className="section-label">CLICK4MASSAGE</h3>
              <h2 data-aos="zoom-in">Customized Sports Massage In Dubai To Address Your Unique Needs</h2>
              <p>At Click4Massage, we understand that every athlete is different. Our therapists conduct a thorough assessment to identify the specific muscle groups and problem areas relevant to your sport and training regimen.</p>
              <p>Whether you're dealing with tight hamstrings, shoulder tension, lower back strain, or any other sports-related concern, we tailor our approach to address your individual needs.</p>
              
              <h3 className="subsection-title">Expert Sports Massage Techniques</h3>
              <p>Our skilled therapists employ various proven techniques including deep tissue work, trigger point release, stretching, and specialized sports massage protocols to maximize your results and minimize recovery time.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section" data-aos="fade-up">
        <div className="cta-content">
          <h2 data-aos="zoom-in">Prioritize Your Athletic Performance and Schedule Your Sports Massage</h2>
          <p>Invest in your athletic potential with professional sports massage therapy. Book your personalized session today and experience the difference!</p>
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
