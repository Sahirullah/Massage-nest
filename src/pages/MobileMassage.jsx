import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import img21 from '../assets/Luxury Mobile Massages.jpg'
import img22 from '../assets/Tissue Techniques.jpg'
import img23 from '../assets/Mobile Massages.jpg'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import './MobileMassage.css'

export default function MobileMassage() {
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

        <div className="service-hero-section">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Mobile Massage In Dubai</h1>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="service-content">
        <div className="service-container">
          
          {/* Intro Text */}
          <div className="intro-text">
            <p>Imagine being able to enjoy a relaxing, rejuvenating massage without having to leave your home.</p>
            <p>Our mobile massage therapists come directly to you, providing tailor-made spa experiences designed around your needs. Keep reading to learn why our on-demand massage service is the ultimate way to destress!</p>
          </div>

          {/* Section 1: Ease Daily Stress */}
          <div className="content-block">
            <div className="content-text">
              <h3 className="section-label">SHUKRAN HOME SPA</h3>
              <h2>Ease Daily Stress With Mobile Massages</h2>
              <p>Our mobile massage in Dubai brings all the benefits of a spa directly into your living room.</p>
              <p>No rushing to appointments across town or uncomfortable clinic settings. Just tranquil, therapeutic massages from the best comfort – your home!</p>
              <a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="service-btn">CONTACT US</a>
            </div>
            <div className="content-image">
              <img src={img23} alt="Stress Relief" />
            </div>
          </div>

          {/* Why Choose Section with Feature Cards */}
          <div className="why-choose-section">
            <h3 className="section-label">SHUKRAN HOME SPA</h3>
            <h2>Why Choose Our Home Massage Service?</h2>
            <p className="section-subtitle">Indulge in an oasis of calm with our mobile massages designed around you.</p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">👨‍⚕️</div>
                <h4>Licensed, Experienced Therapists</h4>
                <p>Each member of our team brings professional credentials along with knowledge of techniques like Swedish, Deep Tissue, and Thai massage.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h4>Personalized Sessions</h4>
                <p>We tailor every massage to your problem areas, pressure preferences, and requested techniques.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧴</div>
                <h4>Quality Massage Oils & Supplies</h4>
                <p>Our therapists bring premium massage oils, lotions, scents, towels, and more.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h4>Easy Online Booking</h4>
                <p>Our user-friendly system makes scheduling effortless 24/7.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏢</div>
                <h4>Flexible Scheduling</h4>
                <p>Session lengths range from 30 minutes to 120 minutes. Book on your schedule.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💳</div>
                <h4>Payment Options</h4>
                <p>We accept credit cards and cash. Special package rates are available!</p>
              </div>
            </div>
          </div>

          {/* Section 2: Experience Total Relaxation */}
          <div className="content-block reverse">
            <div className="content-image">
              <img src={img22} alt="Total Relaxation" />
            </div>
            <div className="content-text">
              <h3 className="section-label">SHUKRAN HOME SPA</h3>
              <h2>Our Deep Tissue Techniques Release Chronic Tension</h2>
              <p>We use advanced massage techniques like trigger point therapy, myofascial stretching, and cross-fiber friction to target those inner muscle layers that just won't relax.</p>
              <p>Regardless of whether you have an old injury, repetitive strain or just hold too much tension in your back and shoulders, our precision massage treatment can help!</p>
              
              <h3 className="subsection-title">Experience Total Relaxation</h3>
              <p>Our goal is for you to feel completely at ease during every customized mobile massage session. Our therapists create peaceful environments right in your Dubai home.</p>
            </div>
          </div>

          {/* Section 3: Pamper Yourself */}
          <div className="content-block">
            <div className="content-text">
              <h3 className="section-label">SHUKRAN HOME SPA</h3>
              <h2>Pamper Yourself With Luxury Mobile Massages</h2>
              <p>Our luxury mobile massage sessions start with a consultation to tailor the treatments to your needs. Your assigned massage pro will craft each phase of your session around your responses. We transform whatever room you desire into a blissful spa sanctuary.</p>
              
              <p>Once you are relaxed and ready, your massage therapist will begin the highly personalized treatment. Custom-created sessions feature various techniques.</p>
              
              <p>Consistent massage therapy brings immense benefits:</p>
              <ul className="benefits-list">
                <li>Boosted circulation and muscle repair</li>
                <li>Increased flexibility and range of motion</li>
                <li>Reduction in stress hormones like cortisol</li>
                <li>Decreased anxiety, depression, and pain</li>
                <li>Improved focus and energy levels</li>
                <li>Better quality sleep</li>
              </ul>
            </div>
            <div className="content-image">
              <img src={img21} alt="Luxury Massage" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="cta-content">
          <h2>Prioritize Self-Care and Schedule Your Massage</h2>
          <p>Reward yourself with an indulgent home massage experience with our dedicated team any day, any time. Call or book online now!</p>
          <a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="cta-button">BOOK AN APPOINTMENT →</a>
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
                  <li><Link to="/deep-tissue-massage">Deep Tissue Massage</Link></li>
                  <li><Link to="/mobile-massage">Mobile Massage</Link></li>
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
