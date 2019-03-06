import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Header/Header';
import GoogleOauth from './GoogleOauth/GoogleOauthPage';
import LandingPage from './LandingPage/LandingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <div className={'content'}>
            <Route path="/" exact component={LandingPage} />
            <Route path="/auth" component={GoogleOauth} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
