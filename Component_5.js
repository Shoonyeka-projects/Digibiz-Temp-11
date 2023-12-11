import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'; // Import Swiper styles
import doctorsData from '../json/Comp_5.json';

export default class Component_5 extends Component {
  componentDidMount() {
    // Initialize Swiper after the component has mounted
    new Swiper('.team_carousel', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  render() {
    return (
      <section className="team_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>{doctorsData.heading}</h2>
          </div>
          <div className="swiper-container team_carousel">
            <div className="swiper-wrapper">
              {doctorsData.doctors.map((doctor, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="box">
                    <div className="img-box">
                      <img src={doctor.image} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>{doctor.name}</h5>
                      <h6>{doctor.qualification}</h6>
                      <div className="social_box">
                        {doctor.socialLinks.map((link, linkIndex) => (
                          <Link to={link.link} key={linkIndex}>
                            <i className={`fa fa-${link.platform}`} aria-hidden="true"></i>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Add Navigation Buttons */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>
    );
  }
}
