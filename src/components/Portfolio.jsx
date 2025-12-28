import React from 'react'
import './Portfolio.css'
import Heading_data from './Heading_data'
const Portfolio = () => {
  const project_details = [
    {
      title: "Wearbanjaara",
      link: "https://www.wearbanjaara.com/",
      img_url: "/media/Site_logos/Banjara.png",
      CMS: "Shopify"
    },
    {
      title: "Sodii",
      link: "https://sodii.com.au/",
      img_url: "/media/Site_logos/Soddi.png",
      CMS: "Shopify"
    },
    {
      title: "Longhornco",
      link: "https://longhornco.com.au/",
      img_url: "/media/Site_logos/Longhorn.png",
      CMS: "Shopify"
    },
    {
      title: "Easyfit meals",
      link: "https://easyfit.net.au/",
      img_url: "/media/Site_logos/Easyfit.png",
      CMS: "Shopify"
    },
    {
      title: "Chooseyourattitude",
      link: "https://chooseyourattitude.com/",
      img_url: "/media/Site_logos/Chooseyourattitude.png",
      CMS: "Shopify"
    },
    {
      title: "Alice Do re Mi",
      link: "https://alicedoremi.com/",
      img_url: "/media/Site_logos/Alicedoremi.png",
      CMS: "Wordpress"
    },
    {
      title: "Bellholme",
      link: "https://bellholme.au/",
      img_url: "/media/Site_logos/Bellholme.png",
      CMS: "Wordpress"
    },
    {
      title: "Longhaulcampers",
      link: "https://longhaulcampers.com.au/ ",
      img_url: "/media/Site_logos/LHC-logo.png",
      CMS: "Wordpress"
    },
  ]
  return (
    <section id='Projects' className='Section project_section'>
      <div className="container side_padding">
        <Heading_data bg_heading="PORTFOLIO" main_heading="Projects" />
        <div className="portfolio_wrapper">
          {project_details.length > 0 &&
            project_details.map((value, index) => (
              <a key={index} target="_blank" href={value.link} className="portfolio_sites">
                <div className="site_image_wrapper">
                  <img src={value.img_url} className='site_logos' />
                </div>
                <span className="site_cms">{value.CMS}</span>
                <h2 className="site_title">{value.title}</h2>
              </a>
            ))

          }

        </div>
      </div>

    </section>
  )
}

export default Portfolio
