import { Img } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "../Styles/Home.css"
import Image from "../Images/home/SideImage.png"
import { Link } from 'react-router-dom'
import AOS from 'aos'

function Trail() {

  useEffect(()=>{
    AOS.init({
      // offset: 200,
      duration: 600,
      // easing: 'ease-in-sine',
      // delay: 100,
    });
  })

  return (
      <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="container" >
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Welcome to AMR Group</h2>
                    <p>AMR Group is a fast growing business conglomerate with focus on business in core sectors such as Mining, Constructions, Infrastructure and Energy. </p>
                  </div>
                  <div className="col-lg-12">
                    <div className="white-button first-button scroll-to-section">
                      <Link to='/mission'>Know More</Link>
                    </div>
                    <div className="white-button scroll-to-section">
                    <Link to={'/contact'}>Contact <i className="fab fa-google-play"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={Image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Trail
