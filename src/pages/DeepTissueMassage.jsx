import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import img1 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/1.jpg'
import img2 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/2.jpg'
import img3 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/3.jpg'
import img4 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/4.jpg'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import './DeepTissueMassage.css'

export default function DeepTissueMassage() {
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
            <h1 className="service-hero-title">Professional Deep Tissue Massage At Home in Dubai</h1>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="service-content" data-aos="fade-up">
        <div className="service-container">
          
          {/* Section 1: Get Ultimate Relaxation */}
          <div className="content-block" data-aos="slide-right">
            <div className="content-image" data-aos="zoom-in">
              <img src={img1} alt="Ultimate Relaxation" />
            </div>
            <div className="content-text" data-aos="fade-up" data-aos-delay="200">
              <h3 className="section-label">GET ULTIMATE RELAXATION</h3>
              <h2>Get Ultimate Relaxation with Deep Tissue Massage at Home in Dubai</h2>
              <p>Discover the perfect blend of comfort and therapy. Our deep tissue massage experts use advanced techniques to release tension and stress. At Click4Massage, we bring the spa to you, ensuring maximum comfort in your own home.</p>
              <a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="service-btn">BOOK NOW</a>
            </div>
          </div>

          {/* Section 2: Deep Tissue Techniques */}
          <div className="content-block reverse" data-aos="slide-left">
            <div className="content-image" data-aos="zoom-in">
              <img src={img2} alt="Deep Tissue Techniques" />
            </div>
            <div className="content-text" data-aos="fade-up" data-aos-delay="200">
              <h3 className="section-label">PROVEN TECHNIQUE</h3>
              <h2>Our Deep Tissue Techniques Release Chronic Tension</h2>
              <p>Deep tissue massage targets the deepest layers of muscle and connective tissue. Our trained therapists use firm pressure and slow strokes to release tension and promote healing. This technique is effective for chronic muscle tension, stress relief, and improving circulation.</p>
              <ul className="benefits-list">
                <li>Releases deep muscle tension</li>
                <li>Improves blood circulation</li>
                <li>Reduces chronic pain</li>
                <li>Enhances flexibility and mobility</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Targeted Relief */}
          <div className="content-block" data-aos="slide-right">
            <div className="content-image" data-aos="zoom-in">
              <img src={img3} alt="Targeted Relief" />
            </div>
            <div className="content-text" data-aos="fade-up" data-aos-delay="200">
              <h3 className="section-label">TARGETED RELIEF</h3>
              <h2>Targeted Relief for the Whole Body</h2>
              <p>Whether you're experiencing back pain, shoulder tension, or general muscle stiffness, our deep tissue massage provides targeted relief. We focus on problem areas and use specialized techniques to alleviate discomfort and promote healing.</p>
              <ul className="benefits-list">
                <li>Back and lower back pain relief</li>
                <li>Shoulder and neck tension release</li>
                <li>Enhanced post-workout recovery</li>
                <li>Improved posture and alignment</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Realign Your Body */}
          <div className="content-block reverse" data-aos="slide-left">
            <div className="content-image" data-aos="zoom-in">
              <img src={img4} alt="Realign Body" />
            </div>
            <div className="content-text" data-aos="fade-up" data-aos-delay="200">
              <h3 className="section-label">REALIGN YOUR BODY</h3>
              <h2>Realign Your Body and Relieve Discomfort</h2>
              <p>Deep tissue massage helps realign your body by releasing muscle tension and improving flexibility. Our therapists work with precision to address muscle imbalances and help you achieve better posture, reduced pain, and overall wellness.</p>
              <ul className="benefits-list">
                <li>Corrects muscle imbalances</li>
                <li>Improves overall body alignment</li>
                <li>Reduces pain and discomfort</li>
                <li>Promotes faster recovery</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section" data-aos="fade-up">
        <div className="cta-content" data-aos="zoom-in">
          <h2>Book Your Deep Tissue Massage Today</h2>
          <p>Experience the therapeutic benefits of professional deep tissue massage in the comfort of your own home. Contact Click4Massage to schedule your appointment.</p>
          <a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="cta-button">BOOK AN APPOINTMENT</a>
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
