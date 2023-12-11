import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <Link to="https://html.design/">Free Html Templates</Link>
          </p>
        </div>
      </footer>
    );
  }
}
