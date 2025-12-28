import React from 'react'
import './Hero.css'
import Typewriter from 'typewriter-effect'
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <section id='Hero' className='Section Hero_section'>
      <div className='hero_background fixed_bg' style={{ backgroundImage: 'url("/media/Hero.webp")' }}>
      </div>
      <div className="hero-overlay"></div>
      <div className='container full-height'>
        <div className='hero_section-wrapper'>

          <div className=' hero_content_wrapper'>
            <p className='sub-heading'>Welcome</p>
            <h2 className='hero_heading'>
              <Typewriter
                options={{
                  strings: [
                    "I'm Dipak Gargote",
                    "I'm a Shopify Developer.",
                    "I'm a WordPress Developer.."

                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className='hero_content'>Based in Maharashtra, India</p>
            <Link to="Contact" smooth={true} duration={500} className='btn btn_text' style={{ cursor:'pointer'}}> Hire Me</Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
