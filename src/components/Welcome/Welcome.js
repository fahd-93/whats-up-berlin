import React, { Component } from 'react';
import './Welcome.css';
import Banner from '../../components/Banner/banner';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar';


class Welcome extends Component {
  render() {
    return (

      <div className="row " id="Body">
        <div className="medium-12 columns">

          <CustomNavbar />
          <Banner />



        </div>
      </div>
    );
  }
}

export default Welcome;