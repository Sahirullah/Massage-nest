import { useState, useEffect } from 'react'
import img1 from '../assets/About1.jpg'
import img2 from '../assets/About2.jpg'
import img3 from '../assets/About3.jpg'
import spaImg from '../assets/Massage Service at Home in Dubai _ 149 AED_Hour_files/5.jpg'
import '../pages/About.css'

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [img1, img2, img3]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <>
      {/* Header Section */}
      <section className="about-header">
        <div className="about-header-content">
          <h4>KNOW MORE</h4>
          <h1>About Us</h1>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-slideshow">
            <div className="slideshow-container">
              <div className="slides-wrapper">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                  />
                ))}
              </div>

              <button className="slide-arrow prev" onClick={prevSlide}>❮</button>
              <button className="slide-arrow next" onClick={nextSlide}>❯</button>

              <div className="slide-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="about-content-container">
          <div className="about-content-text">
            <h2>SHUKRAN HOME SPA</h2>
            <h3>About Our Spa</h3>
            <p>
              Introducing Shukran Home Spa, your premier destination for achieving your wellness goals right in the comfort of your own home. Nestled in the vibrant city of Dubai, our sole aim is to breathe life into your wellness aspirations through our tailored massage services.
            </p>
            <p>
              At Shukran Home Spa, we pride ourselves on delivering elite, personalized massage experiences, meticulously crafted to cater to your individual needs. Transform your home into a sanctuary of tranquility as our skilled therapists create a serene spa atmosphere, ensuring utmost relaxation and rejuvenation.
            </p>
            <p>
              Dedicated to excellence, we uphold the highest standards of professionalism in every aspect of our massage therapy. Our commitment to continuous learning and mastery of advanced techniques ensures that each session is a transformational journey towards optimal well-being.
            </p>
            <p>
              Beyond the realm of relaxation, our experts specialize in techniques tailored to enhance muscular health and fitness, providing holistic care for your body and mind. Immerse yourself in a realm of serenity and peace as you explore our diverse range of therapeutic massage services. Don't hesitate to indulge in our beloved spa packages – your path to ultimate relaxation awaits!
            </p>
            <button className="contact-btn">CONTACT US</button>
          </div>
          <div className="about-content-image">
            <img src={spaImg} alt="Spa Services" />
          </div>
        </div>
      </section>
    </>
  )
}
