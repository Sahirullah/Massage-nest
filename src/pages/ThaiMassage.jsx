import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import imgProfessional from '../assets/Get Professional.jpg'
import imgTargeted from '../assets/Targeted Relief.jpg'
import imgTraditional from '../assets/Traditional Thai.jpg'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import './ThaiMassage.css'

export default function ThaiMassage() {
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
            <h1 className="service-hero-title">Revitalize with Thai Massage at Home in Dubai</h1>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="service-content">
        <div className="service-container">
          
          {/* Section 1: Get Professional Thai Massage */}
          <div className="content-block">
            <div className="content-text">
              <h2>Get Professional Thai Massage at Home in Dubai</h2>
              <p>Thai massage is an ancient healing practice that combines acupressure, yoga-like stretching, and meditation. At Shukran Home Spa, our experienced Thai massage therapists bring this traditional art form right to your home in Dubai.</p>
              <p>Our therapists are trained in authentic Thai massage techniques that focus on energy lines and pressure points throughout your body. Each session is customized to your specific needs, whether you're looking to relieve tension, improve flexibility, or simply relax.</p>
            </div>
            <div className="content-image">
              <img src={imgProfessional} alt="Get Professional Thai Massage" />
            </div>
          </div>

          {/* Section 2: More Than Just a Massage */}
          <div className="content-block center-text">
            <h2>More Than Just a Massage</h2>
            <p>Thai massage is a holistic treatment that addresses your physical, mental, and spiritual well-being. It goes beyond simple relaxation to promote overall wellness and vitality.</p>
            <p>By working on specific energy channels and pressure points, Thai massage helps to balance your body's energy system, reduce stress, and enhance your natural healing abilities. Many clients report feeling revitalized and energized after just one session.</p>
          </div>

          {/* Section 3: Targeted Relief for Actions and Pains */}
          <div className="content-block content-block-reverse">
            <div className="content-image">
              <img src={imgTargeted} alt="Targeted Relief for Aches and Pains" />
            </div>
            <div className="content-text">
              <h2>Targeted Relief for Aches and Pains</h2>
              <p>Whether you suffer from chronic back pain, neck stiffness, or muscle tension, Thai massage can provide targeted relief. Our therapists use precise techniques to address problem areas and restore proper alignment.</p>
              <p>The stretching and pressure techniques used in Thai massage help to improve circulation, reduce inflammation, and promote faster healing. Whether you're recovering from an injury or managing chronic pain, our Thai massage therapy can help.</p>
            </div>
          </div>

          {/* Section 4: Traditional Thai Massage */}
          <div className="content-block">
            <div className="content-text">
              <h2>Traditional Thai Massage: Delivered at Home</h2>
              <p>At Shukran Home Spa, we honor the traditional methods of Thai massage while adapting them to your home environment. Our therapists use their hands, feet, knees, and elbows to apply pressure and create therapeutic stretches.</p>
              <p>The result is a deeply relaxing yet invigorating experience that leaves you feeling balanced, flexible, and refreshed. Your session will be conducted in a calm, peaceful setting within your own home.</p>
            </div>
            <div className="content-image">
              <img src={imgTraditional} alt="Traditional Thai Massage" />
            </div>
          </div>

          {/* Section 5: Enhanced Health and Vitality */}
          <div className="content-block center-text">
            <h2>Enhanced Health and Vitality</h2>
            <p>Regular Thai massage sessions can contribute to improved health and vitality. Many clients experience better sleep, increased energy levels, reduced stress, and enhanced overall well-being.</p>
            <p>By investing in regular Thai massage therapy, you're investing in your long-term health and happiness. Let Shukran Home Spa help you discover the transformative benefits of authentic Thai massage.</p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section" style={{ backgroundImage: `url(${heroSec})` }}>
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h3 className="section-label-white">SHUKRAN HOME SPA</h3>
          <h2>Energize Your Body and Mind with Holistic Thai Massage</h2>
          <p>Experience the ancient healing power of Thai massage in the comfort of your own home. Our skilled therapists are ready to help you achieve balance, flexibility, and vitality. Book your Thai massage session with Shukran Home Spa today and discover why clients throughout Dubai trust us for their wellness needs. Don't wait—call us now to schedule your appointment.</p>
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
                  <li><Link to="/sports-massage">Sports Massage</Link></li>
                  <li><Link to="/couples-massage">Couples Massage</Link></li>
                  <li><Link to="/thai-massage">Thai Massage</Link></li>
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
