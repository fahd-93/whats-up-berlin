import React, { Component } from 'react';
<<<<<<< Updated upstream:my-app/src/components/Welcome/Welcome.js
=======
import Banner from '../Banner/banner'

>>>>>>> Stashed changes:src/components/Welcome/Welcome.js

import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
<<<<<<< Updated upstream:my-app/src/components/Welcome/Welcome.js
      <div className="row " id="Body">
        <div className="medium-12 columns">
          <h2 id="welcomeText">We Work To Connect People Together!</h2>
=======
      <div>
        <Banner />
        <div className="row " id="Body">
          <div className="medium-12 columns">
            <br />
            <h2 id="welcomeText">we bring communities together </h2>

>>>>>>> Stashed changes:src/components/Welcome/Welcome.js

          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;