import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import img1 from '../assets/About1.jpg'
import img2 from '../assets/About2.jpg'
import img3 from '../assets/About3.jpg'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
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
      {/* Header - Same as Home */}
      <header className="header" style={{backgroundImage: `url(${heroSec})`}}>
        <div className="header-top">
          <div className="logo-section">
            <img src={logo} alt="Shukran Home Spa Logo" className="logo" />
            <span className="logo-text">Shukran Home Spa</span>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><ServiceDropdown /></li>
              <li><a href="#packages">OUR PACKAGES</a></li>
              <li><a href="#blog">OUR BLOG</a></li>
              <li><a href="#contact">CONTACT US</a></li>
              <li><a href="#book" className="book-btn">BOOK NOW</a></li>
            </ul>
          </nav>
        </div>

        <div className="about-hero-section">
          <div className="about-hero-content">
            <p className="about-hero-label">KNOW MORE</p>
            <h1 className="about-hero-title">About Us</h1>
          </div>
        </div>
      </header>

      {/* About Intro Section */}
      <section className="about-intro-section">
        <div className="about-intro-container">
          <div className="about-intro-text">
            <h2>SHUKRAN HOME SPA</h2>
            <p>
              Shukran Home Spa is a trusted home massage service in Dubai, offering professional spa and wellness treatments in the comfort of your home. Our experienced therapists provide personalized massage therapies designed to relieve stress, reduce muscle tension, improve circulation, and promote overall well-being. We create a relaxing spa experience using professional techniques tailored to your needs. Whether you're looking for relaxation, pain relief, or a rejuvenating wellness session, Shukran Home Spa is committed to delivering exceptional home spa services across Dubai.
            </p>
            <button className="contact-us-btn">CONTACT US</button>
          </div>
          <div className="about-intro-image">
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
      <section className="expertise-section">
        <div className="expertise-container">
          <h2>Our Expertise</h2>
          <p className="expertise-subtitle">Shukran Home Spa stands out in Dubai for its distinctive offerings, backed by:</p>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h4>Extensive expertise in our niche</h4>
            </div>
            <div className="expertise-card">
              <h4>A team of skilled professionals driving our success</h4>
            </div>
            <div className="expertise-card">
              <h4>A diverse range of massage services tailored to your needs</h4>
            </div>
            <div className="expertise-card">
              <h4>Cost-effective solutions that prioritize your well-being</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="cta-content">
          <p className="cta-label">SHUKRAN HOME SPA</p>
          <h2>Count on Shukran Home Spa for the Best Spa Experience</h2>
          <p>Contact us now to book your at-home massage service and embark on a journey to inner peace and tranquility.</p>
          <button className="cta-button">BOOK AN APPOINTMENT →</button>
        </div>
      </section>

      {/* Footer - Same as Home */}
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
                  <li><a href="/">Home</a></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><a href="#packages">Our Packages</a></li>
                  <li><a href="#blog">Our Blogs</a></li>
                  <li><a href="#contact">Contact Us</a></li>
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
