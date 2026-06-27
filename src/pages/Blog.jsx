import { Link } from 'react-router-dom'
import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import heroSec from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/hero-sec.png'
import img1 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/1.jpg'
import img2 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/2.jpg'
import img3 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/3.jpg'
import img4 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/4.jpg'
import img5 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/5.jpg'
import img6 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/6.jpg'
import whatsappBtn from '../assets/Whatsapp-btn.avif'
import ServiceDropdown from '../components/ServiceDropdown'
import MobileMenu from '../components/MobileMenu'
import './Blog.css'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Best Time to Book a Thai Massage at Home in Dubai',
      date: 'June 25, 2025',
      image: img1,
      excerpt: "There's something incredibly comforting about ending a hectic day with a soothing Thai massage in the privacy of your own home. But do you know"
    },
    {
      id: 2,
      title: 'Benefits of Home Massage for Women in Dubai',
      date: 'June 20, 2025',
      image: img2,
      excerpt: 'In the vibrant city of Dubai, where the pace of life never seems to slow down, finding peace and relaxation at home is precious for'
    },
    {
      id: 3,
      title: 'Why Home Massage in Dubai is Better Than Spa Visits',
      date: 'June 15, 2025',
      image: img3,
      excerpt: 'Dubai is a city that never slows down. Between long work hours, traffic, social commitments, and the constant pressure to stay fit. Finding time'
    },
    {
      id: 4,
      title: 'Still Visiting Massage Places? Benefits of Home Massage in Dubai',
      date: 'June 10, 2025',
      image: img4,
      excerpt: 'The last thing you would want to do is sit in traffic, after a long, exhausting day in Dubai, only to get a massage to'
    },
    {
      id: 5,
      title: 'What Are the Benefits of Deep Tissue Massage for Chronic Pain?',
      date: 'June 5, 2025',
      image: img5,
      excerpt: 'Tired of pain that won\'t go? This blog explains the benefits of deep tissue massage for chronic pain and how to begin experiencing real relief'
    },
    {
      id: 6,
      title: 'What Is a Thai Massage and Its Benefits: A Complete Guide',
      date: 'May 30, 2025',
      image: img6,
      excerpt: 'Have you ever wished for a physical reset button that could instantly melt away your stress and restore your energy levels? Thai massage is the'
    }
  ]

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

        <div className="blog-hero-section">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">Our Blog</h1>
          </div>
        </div>
      </header>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-date">{post.date}</p>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href="#" className="read-more">Read More »</a>
                </div>
              </article>
            ))}
          </div>
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
