import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import img1 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/1.jpg'
import img5 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/5.jpg'
import img8 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/8.jpg'
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
            <h1 className="service-hero-title">Professional Deep Tissue Massage At Home in Dubai</h1>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="service-content">
        <div className="service-container">
          {/* Section 1 */}
          <div className="service-section">
            <div className="service-text">
              <h2 className="service-section-title">Get Ultimate Relaxation with Deep Tissue Massage at Home in Dubai</h2>
              <p className="service-intro">Are you searching for the ultimate way to relax? Want to try something amazing? We are happy to announce that we have all the care you need to live a stress-free life.</p>
              <p className="service-description">Deep tissue massage is a therapeutic technique that focuses on the deeper layers of muscles and connective tissue. Our professional therapists use slow, deliberate strokes with increased pressure to target chronic tension and muscle tightness. This massage style is perfect for those seeking relief from pain, stress, and muscle fatigue.</p>
              <button className="service-cta-btn">BOOK NOW</button>
            </div>
            <div className="service-image">
              <img src={img1} alt="Deep Tissue Massage" />
            </div>
          </div>

          {/* Section 2 */}
          <div className="service-section service-section-alt">
            <div className="service-text">
              <h3 className="service-subsection-title">Our Deep Tissue Techniques Release Chronic Tension</h3>
              <p>We use a range of deep tissue massage techniques to release chronic tension and stress from your muscles. Our trained therapists apply targeted pressure to specific areas of tension, helping to break up adhesions and restore proper muscle function.</p>
              <ul className="techniques-list">
                <li>Targeted pressure point therapy</li>
                <li>Myofascial release techniques</li>
                <li>Cross-fiber friction massage</li>
                <li>Trigger point therapy</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="service-section">
            <div className="service-image">
              <img src={img5} alt="Therapeutic Massage Benefits" />
            </div>
            <div className="service-text">
              <h3 className="service-subsection-title">Targeted Relief for the Whole Body</h3>
              <p>Deep tissue massage provides targeted relief for various conditions, including:</p>
              <ul className="benefits-list">
                <li>Chronic pain and muscle tension</li>
                <li>Sports injuries and strains</li>
                <li>Poor posture and alignment issues</li>
                <li>Limited mobility and stiffness</li>
              </ul>
              <p>Whether you're recovering from an injury or managing chronic pain, our deep tissue massage can help restore your body's natural balance and promote healing.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="service-section service-section-alt">
            <div className="service-text">
              <h3 className="service-subsection-title">Realign Your Body and Relieve Discomfort</h3>
              <p>Our deep tissue massage specialists work to realign your body and relieve discomfort caused by muscle tension and stress. Through consistent massage therapy, you'll experience improved flexibility, better circulation, and reduced pain levels.</p>
              <p className="service-benefits">Benefits include: improved blood flow, reduced muscle soreness, enhanced flexibility, better sleep quality, and overall wellness improvement.</p>
            </div>
            <div className="service-image">
              <img src={img8} alt="Body Realignment" />
            </div>
          </div>

          {/* Section 5 */}
          <div classNam