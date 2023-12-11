import React, { Component } from 'react';
import contactFormData from '../json/Comp_7.json'; // Adjust the path accordingly

export default class Component_7 extends Component {
  render() {
    const { heading, fields, buttonText, imageSrc } = contactFormData;

    return (
      <section className="contact_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>{heading}</h2>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="form_container">
                <form action="">
                  {fields.map((field, index) => (
                    <div key={index}>
                      <input type={field.type} placeholder={field.placeholder} className={field.className} />
                    </div>
                  ))}
                  <div className="btn_box">
                    <button>{buttonText}</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5">
              <div className="img-box">
                <img src={imageSrc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
