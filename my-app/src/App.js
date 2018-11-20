import React, { Component } from 'react';
import Banner from './components/Banner/banner';

import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MobileHeader from './components/MobileHeader/MobileHeader';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appName: "What's Up Berlino!",
      home: false
    }
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>



          <div className="off-canvas-content" data-off-canvas-content>
            <MobileHeader name={this.state.appName} />
            <Banner />
            <Header name={this.state.appName} />
            <Routes name={this.state.appName} />
            <hr />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
