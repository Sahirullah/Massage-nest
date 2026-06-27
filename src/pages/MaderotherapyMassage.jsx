import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import imgExperience from '../assets/Experience the Transformation.jpg'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import maderotherapy1 from '../assets/Maderotherapy/1.png'
import maderotherapy2 from '../assets/Maderotherapy/2.png'
import maderotherapy3 from '../assets/Maderotherapy/3.png'
import maderotherapy4 from '../assets/Maderotherapy/4.png'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import './MaderotherapyMassage.css'

export default function MaderotherapyMassage() {
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
            <h1 className="service-hero-title">Maderotherapy At Home In Dubai</h1>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="service-content" data-aos="fade-up">
        <div className="service-container">
          
          {/* Section 1: Experience the Transformation */}
          <div className="content-block" data-aos="slide-right">
            <div className="content-text">
              <p className="section-label">CLICK4MASSAGE</p>
              <h2 data-aos="zoom-in">Experience the Transformation with Maderotherapy Massage at Home in Dubai</h2>
              <p>Are you seeking to shed excess fat and achieve a more toned physique? Look no further than Click4Massage at Home Spa for Maderotherapy massage in Dubai. A revolutionary treatment that redefines your body contours and transforms your appearance.</p>
              <p>Maderotherapy is a non-invasive, wood-based massage technique that combines the therapeutic benefits of massage with the sculpting power of specially crafted wooden instruments to safely target problem areas while the skin care treatments.</p>
              <p>Experience the dramatic results of Maderotherapy as it effectively reduces fat deposits, improves circulation and tightens, utilizing specially crafted wooden instruments to easily target problem areas while the skin care treatments.</p>
              <a href="https://wa.me/971504480363" target="_blank" rel="noopener noreferrer" className="service-btn">BOOK NOW</a>
            </div>
            <div className="content-image" data-aos="zoom-in">
              <img src={imgExperience} alt="Experience the Transformation" />
            </div>
          </div>

          {/* Section 2: Unlock the Benefits */}
          <div className="content-block center-text" data-aos="fade-up">
            <h2 data-aos="zoom-in">Unlock the Benefits of Maderotherapy Massage</h2>
            <p>In today's hectic world, cellulite is a common concern that takes both your comfort and esteem, often paving the remaining to unattractive. Maderotherapy emerges as a highly effective solution, harnessing the power of wooden instruments to break down fat deposits while boosting collagen. Cellulite is made and swelling under the skin continuous sessions.</p>
            <p>Fat tissue begins to recede, excess fluid flushes out, Stubborn tissue taps reduces the appearance of at home Maderotherapy massage in Dubai. Contact us today to schedule an appointment with our experienced massage therapists and embark on your journey to a transformed physique.</p>
          </div>

          {/* Section 3: Why Choose Click4Massage */}
          <div className="why-choose-section" data-aos="fade-up">
            <p className="section-label">CLICK4MASSAGE</p>
            <h2 data-aos="zoom-in">Why Choose Click4Massage for Maderotherapy in Dubai?</h2>
            <p className="why-choose-subtitle">When it comes to Maderotherapy, Click4Massage stands out for several reasons.</p>
            
            <div className="features-grid">
              <div className="feature-card" data-aos="zoom-in" data-aos-delay="0">
                <img src={maderotherapy1} alt="Skilled and Experienced Therapists" className="feature-icon" />
                <h3>Skilled and Experienced Therapists</h3>
                <p>Our team comprises highly trained massage therapists with the expertise to deliver massage results through proven techniques.</p>
              </div>

              <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
                <img src={maderotherapy2} alt="Precision Techniques" className="feature-icon" />
                <h3>Precision Techniques</h3>
                <p>We employ the most effective techniques to maximize the benefits of Maderotherapy, ensuring optimal results for your body.</p>
              </div>

              <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
                <img src={maderotherapy3} alt="Hygienic Standards" className="feature-icon" />
                <h3>Hygienic Standards</h3>
                <p>Your well-being is our top priority as we maintain strict cleanliness and sanitization protocols to ensure your safety.</p>
              </div>

              <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
                <img src={maderotherapy4} alt="Punctuality and Professionalism" className="feature-icon" />
                <h3>Punctuality and Professionalism</h3>
                <p>At Click4Massage, we value your time and strive to provide the highest level of service, punctuality and professionalism every session.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section" style={{ backgroundImage: `url(${heroSec})` }} data-aos="fade-up">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <p className="section-label-white">CLICK4MASSAGE</p>
          <h2 data-aos="zoom-in">Schedule Your Maderotherapy Massage with Click4Massage Today</h2>
          <p>If you're seeking Maderotherapy massage from industry-leading therapists, then no further than Click4Massage. Don't settle for anything less than the best when it comes to sculpting that transformation benefits of Maderotherapy. Book your appointment with us today and experience that only Click4Massage can deliver.</p>
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
