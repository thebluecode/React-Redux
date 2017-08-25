import React from 'react';
import ReactDOM from 'react-dom';
import InstagramLogin from 'react-instagram-login';

class LoginForm extends React.Component {

  singIn(response) {
    console.log('response');
    console.log(response);
  }

  popupError(response) {
    console.log('response');
    console.log(response);
  }

  render() {
    return (
      <InstagramLogin
        clientId="bb71d6570d1c48c7af64917c7be7d992"
        buttonText="Login"
        onSuccess={this.singIn}
        onFailure={this.popupError}
      />
    );
  }
}

export default LoginForm;
