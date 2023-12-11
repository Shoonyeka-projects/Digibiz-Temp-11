import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import testimonials from '../json/Comp_6.json'; // Adjust the path accordingly

export default class Component_6 extends Component {
  render() {
    return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            <span>Testimonial</span>
          </h2>
        </div>
      </div>
      <div className="container px-0">
        <div id="customCarousel2" className="carousel carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="box">
                  <div className="client_info">
                    <div className="client_name">
                      <h5>{testimonial.name}</h5>
                      <h6>{testimonial.designation}</h6>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <p>{testimonial.quote}</p>
                  <Link to={testimonial.readMoreLink}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel_btn-box">
            <a className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
