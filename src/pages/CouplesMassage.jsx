import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import imgCouple from '../assets/Couple.jpg'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import './CouplesMassage.css'

export default function CouplesMassage() {
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
            <h1 className="service-hero-title">Experience the Luxurious Couple Massage at Home in Dubai</h1>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="service-content" data-aos="fade-up">
        <div className="service-container">
          
          {/* Section 1: Deepen Your Bond */}
          <div className="intro-section" data-aos="fade-up">
            <p className="intro-label">Deepen Your Bond with a Relaxing Couple Massage at Home in Dubai</p>
            <h2 data-aos="zoom-in">Enhance the Connection with Your Partner through Click4Massage's Couples Massage</h2>
            <p className="intro-description">Looking for some quality time alone with your significant other? Look no further than Click4Massage for the ultimate couple's massage experience. Our couples' massage is expertly crafted to help partners relax and rejuvenate together, fostering a deeper connection and addressing any tensions that may arise.</p>
            <p className="intro-description">This luxurious experience, akin to those offered by premier couple spas in Dubai, provides the perfect opportunity to bond while indulging in a well-deserved treat. Many couples find the massage to be a sensual experience, paving the way for intimate moments later on.</p>
          </div>

          {/* Section 2: How Our Dubai Couples Massage */}
          <div className="content-block center-text" data-aos="slide-right">
            <h2 data-aos="zoom-in">How Our Dubai Couples Massage Can Revitalize Your Relationship?</h2>
            <p>A disagreement with your partner can cast a shadow over your entire weekend, leaving you feeling disconnected and distressed. That's where our couple's massage in Dubai works its magic.</p>
            <p>Whether you're struggling to find time together, dealing with personal issues, or simply craving intimacy, our couple's massage at Click4Massage can make a world of difference. With side-by-side massage tables, you and your partner can immerse yourselves in a stress-relieving, muscle-soothing experience that strengthens your bond.</p>
          </div>

          {/* Section 3: Tailored Experience with Image */}
          <div className="content-block" data-aos="slide-left">
            <div className="content-image" data-aos="zoom-in">
              <img src={imgCouple} alt="Tailored Couple's Massage" />
            </div>
            <div className="content-text">
              <h2 data-aos="zoom-in">Tailored Couple's Massage Experience in Dubai</h2>
              <p>At Click4Massage, we believe in personalized pampering. Choose from our range of massages, whether you're in need of relaxation, deep tissue work, or the comforting warmth of hot stones.</p>
              <p>You and your partner can customize this experience further by adjusting the pressure, targeting specific areas, and communicating any health concerns to our skilled therapists.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section" style={{ backgroundImage: `url(${heroSec})` }} data-aos="fade-up">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h3 className="section-label-white">CLICK4MASSAGE</h3>
          <h2 data-aos="zoom-in">Book Your Ultimate Couple's Massage At Home In Dubai Today</h2>
          <p>A massage isn't just a treatment—it's an experience that floods your body with happiness-inducing chemicals like oxytocin, serotonin, and dopamine, leaving you feeling blissfully relaxed. Our couple's massage in Dubai goes beyond mere relaxation, offering unparalleled pain relief and emotional rejuvenation for couples. If you're looking to strengthen your bond while reaping the myriad benefits of massage, don't hesitate to book a couple's massage with Click4Massage today. Our expert therapists will cater to your every need and desire, ensuring a truly satisfying experience. Don't delay—call us now to schedule your appointment.</p>
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
