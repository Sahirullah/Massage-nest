import logo from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/logo.png'
import img9 from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/9.jpg'
import './About.css'

function About() {
  return (
    <>
      <header className="about-header">
        <nav className="about-nav">
          <div className="about-logo-section">
            <img src={logo} alt="Shukran Home Spa" className="about-logo" />
            <span className="about-logo-text">Shukran Home Spa</span>
          </div>
          <ul className="about-nav-menu">
            <li><a href="/">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="/">OUR SERVICES</a></li>
            <li><a href="/">OUR PACKAGES</a></li>
            <li><a href="/">OUR BLOG</a></li>
            <li><a href="/">CONTACT US</a></li>
            <li><a href="/" className="book-btn">BOOK NOW</a></li>
          </ul>
        </nav>

        <div className="about-hero">
          <h4>KNOW MORE</h4>
          <h1>About Us</h1>
        </div>
      </header>

      <section className="about-intro">
        <div className="about-container">
          <div className="about-intro-content">
            <div className="about-intro-text">
              <h2>SHUKRAN HOME SPA</h2>
              <p>At Shukran Home Spa, we pride ourselves on delivering your wellness goals right in the comfort of your own home. Nestled in the vibrant city of Dubai, our spa aims to breathe life into your well-being experiences through our tailored massage services.</p>
              
              <p>At Shukran Home Spa, we pride ourselves on delivering elite, personalized massage experiences designed specifically for you. We understand that your time is precious, which is why we bring our services directly to you. With over a decade of hands-on experience, we are confident to guarantee your peace into a sanctuary of tranquility in your own therapists create a serene spa atmosphere, ensuring unique rejuvenation and regeneration.</p>
              
              <p>Dedicated to excellence, we uphold the highest standards of professionalism in every aspect of our massage therapy. Our commitment to continuous learning and mastery of advanced techniques ensures that each session is a transformational journey towards optimal well-being.</p>
              
              <p>Beyond the realm of massages, our experts specialize in techniques tailored to enhance muscular health and fitness, providing holistic care for your body and mind. Immerse yourself in a haven of serenity and peace as you explore our diverse range of therapeutic massage services. Don't hesitate to indulge in our bespoke spa packages –</p>
              
              <button className="explore-btn">EXPLORE US</button>
            </div>

            <div className="about-intro-image">
              <img src={img9} alt="Massage Service" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission-vision">
        <div className="about-container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>Our mission is to give the freedom and wellness mentally by diligently meeting the unique needs of our clients with unparalleled care and efficiency.</p>
            </div>

            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>We aspire to be the premier personalized customer service to clients anywhere, fostering growth through a steadfast commitment to client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-expertise">
        <div className="about-container">
          <h2>Our Expertise</h2>
          <p className="expertise-subtitle">Shukran Home Spa stands out in Dubai for its distinctive offerings, fueled by</p>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <h4>Extensive expertise in our niche</h4>
              <p>Years of experience in the massage industry</p>
            </div>

            <div className="expertise-card">
              <h4>A team of skilled professionals driving our success</h4>
              <p>Expert therapists dedicated to excellence</p>
            </div>

            <div className="expertise-card">
              <h4>A diverse range of massage services tailored to your needs</h4>
              <p>Comprehensive therapeutic options</p>
            </div>

            <div className="expertise-card">
              <h4>Cost-effective solutions that prioritize your well-being</h4>
              <p>Affordable premium spa services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-content">
          <h4>SHUKRAN HOME SPA</h4>
          <h2>Count on Shukran Home Spa for the Best Spa Experience</h2>
          <p>Contact us now to book your at-home massage service and embark on a journey to inner peace and tranquility.</p>
          <button className="cta-btn">BOOK AN APPOINTMENT →</button>
        </div>
      </section>

      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Our Packages</a></li>
              <li><a href="/">Our Blog</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/">Deep Tissue Massage</a></li>
              <li><a href="/">Mobile Massage</a></li>
              <li><a href="/">Sports Massage</a></li>
              <li><a href="/">Couples Massage</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p><a href="tel:+971504480363">📞 +971504480363</a></p>
            <p><a href="mailto:shukrianhomespa@gmail.com">📧 shukrianhomespa@gmail.com</a></p>
            <p>📍 Address: Dubai</p>
          </div>

          <div className="footer-section">
            <img src={logo} alt="Shukran Home Spa" className="footer-logo" />
            <p>Introducing Shukran Home Spa, your premier destination for soothing your well-being right in the comfort of your own home.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Shukran Home Spa. All Rights Reserved.</p>
          <p>Website Development By | Taifoor Technologies</p>
        </div>
      </footer>
    </>
  )
}

export default About
