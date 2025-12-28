import React from 'react'
import './Heading_data.css'
const Heading_data = (props) => {
  return (
    <div className='About_heading'>
                    <h2 className='background_text'>
                        {props.bg_heading}
                    </h2>
                    <p className='main_text'>{props.main_heading} <span className='headin_border_span'></span></p>
                </div>
  )
}

export default Heading_data
