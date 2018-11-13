import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="row" id="footer">
        <div className="medium-12 columns">
          <p>&copy; Copyright What's Up Berlino<br />All rights Reserved <a href="https://www.9lessons.info">9lessons.info</a></p>
        </div>
      </div>
    );
  }
}

export default Footer;