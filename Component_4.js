import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import treatmentTexts from '../json/Comp_4.json';

export default class Component_4 extends Component {
  render() {
    return (
      <section className="treatment_section layout_padding">
        <div className="side_img">
          <img src="images/treatment-side-img.jpg" alt="" />
        </div>
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              {treatmentTexts.heading}
            </h2>
          </div>
          <div className="row">
            {treatmentTexts.treatments.map((treatment, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="box">
                  <div className="img-box">
                    <img src={treatment.image} alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      {treatment.title}
                    </h4>
                    <p>
                      {treatment.content}
                    </p>
                    <Link to={treatment.readMoreLink}>Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
