import React from 'react'
import './About.css'
import Heading_data from './Heading_data'
const About = () => {
    return (
        <section id='About' className='Section About_section'>
            <div className='container side_padding'>
                <Heading_data bg_heading="ABOUT ME" main_heading="Know Me More"/>
                <div className='About_content_wrapper'>
                    <div className="content_block">
                        <h2 className='content_heading'>I'm <span className='highlighted_content'>Dipak Gargote, </span>a web developer</h2>
                        <p className='about_para'>Senior Web Developer with 2+ years of experience specializing in e-Commerce development, theme customization, and performance optimization. Passionate about building scalable, responsive storefronts that drive conversions and deliver exceptional user experiences.</p>
                        <p className='about_para'>With expertise in Shopify and WordPress development, I deliver high-performance e-commerce solutions that exceed client expectations. My focus is on creating scalable, responsive storefronts that drive conversions and business growth.</p>
                    </div>
                    <div className="info_block">
                        <ul className='info_wrapper'>
                            <li><span>Name: </span> Dipak Gargote</li>
                            <li><span>Email:</span> dipakr.gargote2001@gmail.com</li>
                            <li><span>Age: </span> 24</li>
                            <li><span>From: </span> Maharashtra, India</li>

                        </ul>
                        <a href="/media/DIPAK_GARGOTE.pdf" target='_blank' className='secondary_btn'>Download CV</a>
                    </div>

                </div>
                <div className="count_grid">
                    <div className="counter_col">
                        <h3 className='number_data'>2+</h3>
                        <p>Years of Experience</p>
                    </div>
                    <div className="counter_col">
                        <h3 className='number_data'>34+</h3>
                        <p>Happy Clients</p>
                    </div>
                    <div className="counter_col">
                        <h3 className='number_data'>20+</h3>
                        <p>Project Done</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
