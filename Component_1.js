import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_1.json';

export default class Component_1 extends Component {
  render() {
    return (
    <div className="hero_area">
      <section className="slider_section">
        <div className="dot_design">
          <img src="images/dots.png" alt=""/>
        </div>
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {data.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <div className="play_btn">
                          <button>
                            <i className="fa fa-play" aria-hidden="true"></i>
                          </button>
                        </div>
                        <h1>
                          {item.title} <br />
                          <span>
                            {item.subtitle}
                          </span>
                        </h1>
                        <p>
                          {item.content}
                        </p>
                        <a href="">
                          {item.buttonText}
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={item.imageSrc} alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel_btn-box">
            <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
              <img src="images/prev.png" alt=""/>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
              <img src="images/next.png" alt=""/>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    );
  }
}
