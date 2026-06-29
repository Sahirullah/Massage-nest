import { useParams, Link } from 'react-router-dom'
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
import './BlogDetail.css'

export default function BlogDetail() {
  const { id } = useParams()

  const blogPosts = {
    1: {
      title: 'Best Time to Book a Thai Massage at Home in Dubai',
      date: 'June 25, 2025',
      image: img1,
      content: `
        <h2>Best Time to Book a Thai Massage at Home in Dubai</h2>
        <p>There's something incredibly comforting about ending a hectic day with a soothing Thai massage in the privacy of your own home.</p>
        <p>Thai massage is an ancient healing practice that combines acupressure, stretching, and energy work to promote physical and mental well-being. When performed at home, it becomes an even more relaxing experience.</p>
        <h3>Optimal Timing for Thai Massage</h3>
        <p>The best time to book a Thai massage depends on your schedule and what you're hoping to achieve. Morning sessions can energize you for the day ahead, while evening sessions help you unwind and prepare for restful sleep.</p>
        <h3>Benefits of Home Thai Massage</h3>
        <ul>
          <li>No travel stress or traffic concerns</li>
          <li>Complete privacy and comfort</li>
          <li>Personalized atmosphere in your own space</li>
          <li>Extended relaxation before and after</li>
          <li>Ideal for busy professionals</li>
        </ul>
        <p>Click4Massage offers professional Thai massage services right at your doorstep in Dubai, ensuring you get the best experience without leaving home.</p>
      `
    },
    2: {
      title: 'Benefits of Home Massage for Women in Dubai',
      date: 'June 20, 2025',
      image: img2,
      content: `
        <h2>Benefits of Home Massage for Women in Dubai</h2>
        <p>In the vibrant city of Dubai, where the pace of life never seems to slow down, finding peace and relaxation at home is precious for women.</p>
        <h3>Why Home Massage is Perfect for Women</h3>
        <p>Home massage services provide a safe, comfortable, and private space for women to relax and rejuvenate. This is especially important in today's busy world.</p>
        <h3>Key Benefits</h3>
        <ul>
          <li>Stress Relief: Massage reduces cortisol levels and promotes relaxation</li>
          <li>Better Sleep: Regular massage improves sleep quality</li>
          <li>Pain Management: Alleviates headaches, back pain, and muscle tension</li>
          <li>Improved Circulation: Enhances blood flow and oxygen delivery</li>
          <li>Mental Clarity: Helps clear the mind and improve focus</li>
        </ul>
        <p>Our professional therapists at Click4Massage specialize in creating a comfortable environment where women can fully relax and benefit from therapeutic massage.</p>
      `
    },
    3: {
      title: 'Why Home Massage in Dubai is Better Than Spa Visits',
      date: 'June 15, 2025',
      image: img3,
      content: `
        <h2>Why Home Massage in Dubai is Better Than Spa Visits</h2>
        <p>Dubai is a city that never slows down. Between long work hours, traffic, social commitments, and the constant pressure to stay fit, finding time for self-care can be challenging.</p>
        <h3>Advantages of Home Massage</h3>
        <p>While spa visits have their place, home massage offers unique advantages that traditional spa visits cannot match.</p>
        <h3>Comparison</h3>
        <ul>
          <li><strong>Convenience:</strong> No travel time or traffic stress</li>
          <li><strong>Privacy:</strong> Complete comfort in your own space</li>
          <li><strong>Flexibility:</strong> Schedule massages at your convenience</li>
          <li><strong>Cost-Effective:</strong> No overhead costs mean better pricing</li>
          <li><strong>Relaxation:</strong> No commute means more relaxation time</li>
        </ul>
        <p>Click4Massage brings professional spa-quality massage services directly to your home in Dubai.</p>
      `
    },
    4: {
      title: 'Still Visiting Massage Places? Benefits of Home Massage in Dubai',
      date: 'June 10, 2025',
      image: img4,
      content: `
        <h2>Still Visiting Massage Places? Benefits of Home Massage in Dubai</h2>
        <p>The last thing you would want to do is sit in traffic, after a long, exhausting day in Dubai, only to get a massage.</p>
        <h3>The Hidden Stress of Spa Visits</h3>
        <p>Traditional spa visits in Dubai often involve long commutes through traffic, waiting times, and the stress of being in a public space. This defeats the purpose of relaxation.</p>
        <h3>Why Home Massage is Superior</h3>
        <ul>
          <li>Immediate relaxation upon starting massage</li>
          <li>No waiting time or scheduling conflicts</li>
          <li>Professional service in a familiar environment</li>
          <li>Ability to continue relaxing after the session</li>
          <li>Better value for money</li>
        </ul>
        <p>Experience the difference with Click4Massage - your wellness solution delivered to your doorstep.</p>
      `
    },
    5: {
      title: 'What Are the Benefits of Deep Tissue Massage for Chronic Pain?',
      date: 'June 5, 2025',
      image: img5,
      content: `
        <h2>What Are the Benefits of Deep Tissue Massage for Chronic Pain?</h2>
        <p>Tired of pain that won't go? Deep tissue massage is a proven therapeutic approach that can provide lasting relief.</p>
        <h3>Understanding Chronic Pain</h3>
        <p>Chronic pain affects millions of people worldwide and can significantly impact quality of life. Traditional treatments don't always work for everyone.</p>
        <h3>How Deep Tissue Massage Helps</h3>
        <ul>
          <li>Breaks up scar tissue and muscle adhesions</li>
          <li>Improves circulation and blood flow</li>
          <li>Reduces inflammation and swelling</li>
          <li>Releases tension in affected muscles</li>
          <li>Promotes long-term pain relief</li>
        </ul>
        <h3>Conditions That Benefit</h3>
        <p>Deep tissue massage is effective for back pain, neck pain, fibromyalgia, arthritis, and sports injuries. Click4Massage therapists are trained in specialized techniques for chronic pain management.</p>
      `
    },
    6: {
      title: 'What Is a Thai Massage and Its Benefits: A Complete Guide',
      date: 'May 30, 2025',
      image: img6,
      content: `
        <h2>What Is a Thai Massage and Its Benefits: A Complete Guide</h2>
        <p>Have you ever wished for a physical reset button that could instantly melt away your stress and restore your energy levels? Thai massage is the answer.</p>
        <h3>What is Thai Massage?</h3>
        <p>Thai massage is an ancient healing tradition dating back over 2,500 years. It combines acupressure, assisted yoga postures, and energy work to restore balance and vitality.</p>
        <h3>Key Benefits</h3>
        <ul>
          <li>Increased flexibility and range of motion</li>
          <li>Improved energy flow throughout the body</li>
          <li>Deep muscle relaxation</li>
          <li>Stress and anxiety reduction</li>
          <li>Better sleep quality</li>
          <li>Enhanced circulation</li>
        </ul>
        <h3>The Experience</h3>
        <p>A typical Thai massage session lasts 60-90 minutes and is performed on a floor mat. The therapist uses their hands, feet, knees, and elbows to apply pressure and create stretches.</p>
        <p>Book your Thai massage experience with Click4Massage today and discover the transformative power of this ancient healing art.</p>
      `
    }
  }

  const post = blogPosts[id]

  if (!post) {
    return <div>Blog post not found</div>
  }

  return (
    <>
      <header className="header blog-detail-header" style={{ backgroundImage: `url(${heroSec})` }}>
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
      </header>

      <section className="blog-detail-section">
        <div className="blog-detail-container">
          <article className="blog-detail-article">
            <div className="blog-detail-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-detail-content">
              <h1 className="blog-detail-title">{post.title}</h1>
              <p className="blog-detail-date">{post.date}</p>
              <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.content }} />
              <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
            </div>
          </article>
        </div>
      </section>

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
