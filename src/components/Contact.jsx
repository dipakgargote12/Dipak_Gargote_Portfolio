import React from 'react'
import Heading_data from './Heading_data'
import './Contact.css'
const Contact = () => {
    return (
        <section id='Contact' className='Section  section_bg contact_section'>
            <div className="container side_padding">
                <Heading_data bg_heading="CONTACT" main_heading="Get In Touch"/>
                <div className="contact_wrapper">
                    <a href="mailto:dipakr.gargote2001@gmail.com" target='_blank' className="contact_block">
                        <div className='contact_icon_wrapper'>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className='contect_data'>
                            <p className="contact_info"> Mail Me</p>
                        </div>
                    </a>
                    <a href="tel:+917741075150" target='_blank' className="contact_block">
                        <div className='contact_icon_wrapper'>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className='contect_data'>
                            <p className="contact_info"> Cotnact Now</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
