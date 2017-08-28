import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import endpoints from '../../constants/InstagramApiEndpoints';
import api from '../../api/InstagramApi';

class Details extends Component {

    state = {
        accessToken: '5797952440.bb71d65.e1933b3674f84a7a9c8ecaaff75ee0a9',
        medias: []
    }

    componentWillMount() {
        var user_id = this.props.params.user_id;
        var lat = this.props.params.lat;
        var lng = this.props.params.lng;

        if (user_id && lat && lng) {

            let self = this;

            axios.get(endpoints.getMediaUrl, {
                params: {
                    lat: lat,
                    lng: lng,
                    access_token: this.state.accessToken
                }
            })
            .then(function (response) {
                self.setState({
                    medias: response.data.data
                });
            });
        }
    }    

    render() {

        var displayMedia = function (media) {
            
            return (
                <img src={media.images.standard_resolution.url} />
            );
        };

        return (
            <div>
                { this.state.medias ? this.state.medias.map(displayMedia, this): ''}
            </div>
        );
    }
}

Details.propTypes = {

};

export default Details;