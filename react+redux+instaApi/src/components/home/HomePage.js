import React from 'react';
import {Link} from 'react-router';
import LoginForm from '../login/LoginForm';
import InstaMap from '../map/InstaMap';

class HomePage extends React.Component {

  render() {
    return (
        <div className="row">
          <div className="col-lg-6 col-sm-12 left">
            <LoginForm />
          </div>
          <div className="col-lg-6 col-sm-12 right">
            <InstaMap />
          </div>
        </div>
    );
  }
}

export default HomePage;
