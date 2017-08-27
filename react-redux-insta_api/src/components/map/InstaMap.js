import React, { Component} from "react"
import PropTypes from 'prop-types';
import {Map , Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {width: '100%', height: '100%', position: 'absolute'}

export class InstaMap extends Component {

    render() {

        var createMarker = function (marker) {
            return (
                <Marker position={marker.position} />
            );
        };

        return (
            <div>
                <Map
                    google={this.props.google}
                    style={style}
                    initialCenter={this.props.position}
                    className={'map'}
                    zoom={14}>

                    { this.props.followers ? this.props.followers.map(createMarker, this) : ''}

                </Map>
            </div>
        );
    }
}

InstaMap.PropTypes = {
    google: PropTypes.object.isRequired,
    position: PropTypes.object.isRequired
};

export default GoogleApiWrapper({
    apiKey: (' AIzaSyCuVCHgSnsnQyu4YLJAPr5H2LK50mhXBEc')
})(InstaMap)