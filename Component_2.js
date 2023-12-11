import React, { Component } from 'react';
import formTexts from '../json/Comp_2.json';

export default class Component_2 extends Component {
  render() {
    return (
      <section className="book_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <h4>
                  {formTexts.formTitle} <span>APPOINTMENT</span>
                </h4>
                <div className="form-row">
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputPatientName">{formTexts.patientNameLabel}</label>
                    <input type="text" className="form-control" id="inputPatientName" placeholder="" />
                  </div>
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputDoctorName">{formTexts.doctorNameLabel}</label>
                    <select name="" className="form-control wide" id="inputDoctorName">
                      {formTexts.optionValues.map((option, index) => (
                        <option value={option} key={index}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputDepartmentName">{formTexts.departmentNameLabel}</label>
                    <select name="" className="form-control wide" id="inputDepartmentName">
                      {formTexts.optionValues.map((option, index) => (
                        <option value={option} key={index}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputPhone">{formTexts.phoneLabel}</label>
                    <input type="number" className="form-control" id="inputPhone" placeholder="XXXXXXXXXX" />
                  </div>
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputSymptoms">{formTexts.symptomsLabel}</label>
                    <input type="text" className="form-control" id="inputSymptoms" placeholder="" />
                  </div>
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputDate">{formTexts.dateLabel}</label>
                    <div className="input-group date" id="inputDate" data-date-format="mm-dd-yyyy">
                      <input type="text" className="form-control" readOnly />
                      <span className="input-group-addon date_icon">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="btn-box">
                  <button type="submit" className="btn">{formTexts.submitButton}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
