import React, { Component } from 'react';
import LoginInstagram from '../login/LoginInstagram';
import InstaMap from '../map/InstaMap';
import fetch from 'node-fetch';

class HomePage extends Component {

    state = { 
        authorization: {
            client_id: 'bb71d6570d1c48c7af64917c7be7d992',
            client_secret: 'bb71d6570d1c48c7af64917c7be7d992',
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:3000/'
        },
        user: {},
        accessToken: '',
        isLogged: false,
        hasCoordinates: false,
        position: { lat: 37.778519, lng: -122.405640 }
     }
    
    setCoordinates = (position) => {
        if (position) {
            this.setState({
                position: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            });

            //https://api.instagram.com/v1/locations/search?lat=-3.7360470999999995&lng=-38.4787131&access_token=5797952440.bb71d65.e1933b3674f84a7a9c8ecaaff75ee0a9

            fetch('https://api.instagram.com/v1/locations/search?lat=-3.7360470999999995&lng=-38.4787131&access_token=5797952440.bb71d65.e1933b3674f84a7a9c8ecaaff75ee0a9').then(function(response){
                console.log(response);
            });
        }
    }

    handleCoordinatesError = (error) =>  {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.log("An unknown error occurred.");
                break;
            default:
                break;
        }
    }

    onLoginSucceeded = (token) => {
        if (token) {
            this.setState({ 
                accessToken: token,
                isLogged: true
            }, () => { navigator.geolocation.getCurrentPosition(this.setCoordinates, this.handleCoordinatesError) });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="App-panel col-lg-4">
                    <div className="App-panel-left row">
                        <LoginInstagram
                            clientId={this.state.authorization.client_id}
                            redirectUri={this.state.authorization.redirect_uri}
                            onSuccess={this.onLoginSucceeded} />
                    </div>
                </div>
                <div className="App-panel col-lg-8">
                    <div className="App-panel-right row">
                        <InstaMap
                            position={this.state.position} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;