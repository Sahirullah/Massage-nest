import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import img1 from '../assets/About1.jpg'
import img2 from '../assets/About2.jpg'
import img3 from '../assets/About3.jpg'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import '../pages/About.css'

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [img1, img2, img3]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])
  
  return (
    <>
      <header className="header desktop-header" style={{backgroundImage: `url(${heroSec})`}}>
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

        <div className="about-hero-section">
          <div className="about-hero-content">
            <p className="about-hero-label">KNOW MORE</p>
            <h1 className="about-hero-title">About Us</h1>
          </div>
        </div>
      </header>

      {/* About Intro Section */}
      <section className="about-intro-section" data-aos="fade-up">
        <div className="about-intro-container">
          <div className="about-intro-text" data-aos="slide-right">
            <h2 data-aos="zoom-in">CLICK4MASSAGE</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Click4Massage is a trusted home massage service in Dubai, offering professional spa and wellness treatments in the comfort of your home. Our experienced therapists provide personalized massage therapies designed to relieve stress, reduce muscle tension, improve circulation, and promote overall well-being. We create a relaxing spa experience using professional techniques tailored to your needs. Whether you're looking for relaxation, pain relief, or a rejuvenating wellness session, Click4Massage is committed to delivering exceptional home spa services across Dubai.
            </p>
            <button className="contact-us-btn" data-aos="zoom-in" data-aos-delay="300">CONTACT US</button>
          </div>
          <div className="about-intro-image" data-aos="slide-left">
            <div className="carousel-container">
              <div className="carousel-wrapper">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`About ${index + 1}`}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  />
                ))}
              </div>
              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section" data-aos="fade-up">
        <div className="expertise-container">
          <h2 data-aos="zoom-in">Our Expertise</h2>
          <p className="expertise-subtitle" data-aos="fade-up" data-aos-delay="200">Click4Massage stands out in Dubai for its distinctive offerings, backed by:</p>
          <div className="expertise-grid">
            <div className="expertise-card" data-aos="fade-up" data-aos-delay="100">
              <h4>Extensive expertise in our niche</h4>
            </div>
            <div className="expertise-card" data-aos="fade-up" data-aos-delay="200">
              <h4>A team of skilled professionals driving our success</h4>
            </div>
            <div className="expertise-card" data-aos="fade-up" data-aos-delay="300">
              <h4>A diverse range of massage services tailored to your needs</h4>
            </div>
            <div className="expertise-card" data-aos="fade-up" data-aos-delay="400">
              <h4>Cost-effective solutions that prioritize your well-being</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section" data-aos="fade-up">
        <div className="cta-content" data-aos="zoom-in">
          <p className="cta-label" data-aos="fade-up" data-aos-delay="100">CLICK4MASSAGE</p>
          <h2 data-aos="fade-up" data-aos-delay="200">Count on Click4Massage for the Best Spa Experience</h2>
          <p data-aos="fade-up" data-aos-delay="300">Contact us now to book your at-home massage service and embark on a journey to inner peace and tranquility.</p>
          <button className="cta-button" data-aos="zoom-in" data-aos-delay="400">BOOK AN APPOINTMENT →</button>
        </div>
      </section>

      {/* Footer - Same as Home */}
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
