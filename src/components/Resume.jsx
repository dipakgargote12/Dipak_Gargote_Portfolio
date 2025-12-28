import React from 'react'
import './Resume.css'
import Heading_data from './Heading_data'
const Resume = () => {
  const education_details = [
    {
      timeline: "2020-2023",
      title: "Bachelor Degree",
      place: "Kolhapur, Maharashatra"
    },
    {
      timeline: "2017-2020",
      title: "Diploma",
      place: "Kolhapur, Maharashatra"
    }
  ]
  const experience_details = [
    {
      timeline: "2024-2025",
      title: "Senior Shopify & Wordpress Devloper",
      place: "Walstar Technologies"
    },
    {
      timeline: "2023-2024",
      title: "Junior Web Devloper",
      place: "Walstar Technologies"
    }
  ]
  const skills = [
    {
      title: "Shopify",
      proficiency: "75"
    },
    {
      title: "WordPress",
      proficiency: "75"
    },
    {
      title: "HTML/CSS",
      proficiency: "95"
    },
    {
      title: "JavaScript",
      proficiency: "75"
    },
    {
      title: "Bootstrap",
      proficiency: "90"
    },
    {
      title: "React JS",
      proficiency: "50"
    },

  ]
  return (
    <section id='Resume' className='Section section_bg Resume_section'>
      <div className="container side_padding">
        <Heading_data bg_heading="SUMMARY" main_heading="Resume" />
        <div className="working_details_wrapper">
          <div className="Education_details_wrapper">
            <h2 className='resume_block_heading'>My Education</h2>
            {education_details.length > 0 &&
              education_details.map((value, index) => (
                <div key={index} className="details_blocks">
                  <span className="timeline">{value.timeline}</span>
                  <h2 className="Working_title">{value.title}</h2>
                  <p className="place">{value.place}</p>
                </div>
              ))
            }
          </div>
          <div className="work_exp_details_wrapper">
            <h2 className='resume_block_heading'>My Experience</h2>
            {experience_details.length > 0 &&
              experience_details.map((value, index) => (
                <div key={index} className="details_blocks">
                  <span className="timeline">{value.timeline}</span>
                  <h2 className="Working_title">{value.title}</h2>
                  <p className="place">{value.place}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="skills_block">
          <h2 className='resume_block_heading'>My Skills</h2>
          <div className="skills_wrapper">
            {skills.length > 0 &&
              skills.map((value, index) => (
                <div key={index} className="skill_counter">
                  <div className="skill_info">
                    <p className='skill_title'>{value.title}</p>
                    <p>{value.proficiency}%</p>
                  </div>
                  <div className="skill_outer">
                    <div className="skill-inner" style={{ width: value.proficiency + "%" }}></div>
                  </div>
                </div>

              ))
            }
          </div>
        </div>
        <div className='Resume_btn_block'> 
        <a href="/media/DIPAK_GARGOTE.pdf" className='secondary_btn resume_btn'>Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default Resume
