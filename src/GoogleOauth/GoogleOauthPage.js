import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';
import { Button } from "tabler-react";
import cookie from 'universal-cookie';

const cookies = new cookie();

class GoogleOauth extends Component {
  constructor(props) {
    super(props);
    this.state = { oauth: !!cookies.get('googleOauth') };
  }

  login = (response) => {
    cookies.set('googleOauth', response, { path: '/' });
    this.setState({ oauth: true })
  };

  logout = () => {
    cookies.remove('googleOauth', { path: '/' });
    this.setState({ oauth: false })
  };

  render() {
    if (this.state.oauth) {
      return (
        <div>
          <Button
            social="google"
            onClick={this.logout}
          >
            Logout Google
          </Button>
        </div>
      )
    }
    return (
      <div>
        <GoogleLogin
          clientId="1026826996997-2v8p9sr8jgm35vk1mojocbjsns6u32kq.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.login}
          onFailure={this.logout}
        />
      </div>
    );
  }
}

export default GoogleOauth;