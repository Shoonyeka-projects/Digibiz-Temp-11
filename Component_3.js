import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import aboutTexts from '../json/Comp_3.json';

export default class Component_3 extends Component {
  render() {
    return (
      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    {aboutTexts.heading}
                  </h2>
                </div>
                <p>
                  {aboutTexts.content}
                </p>
                <Link to={aboutTexts.readMoreLink}>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
