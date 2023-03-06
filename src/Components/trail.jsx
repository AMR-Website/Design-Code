import { Img } from '@chakra-ui/react'
import React from 'react'
import "../Styles/Home.css"
import Image from "../Images/home/SideImage.png"

function Trail() {

  return (
      <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <div class="col-lg-12">
                    <h2>Welcome to AMR Group</h2>
                    <p>AMR Group is a fast growing business conglomerate with focus on business in core sectors such as Mining, Constructions, Infrastructure and Energy. </p>
                  </div>
                  <div class="col-lg-12">
                    <div class="white-button first-button scroll-to-section">
                      <a href="#contact">Know More <i class="fab fa-apple"></i></a>
                    </div>
                    <div class="white-button scroll-to-section">
                      <a href="#contact">Contact <i class="fab fa-google-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
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
