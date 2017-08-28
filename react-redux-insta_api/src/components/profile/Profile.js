import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
    render() {
        return (
            <div className={'text-center'}>
                <img src={this.props.user.profile_picture} alt={'profile logo'} className={'img-circle'} />
                <br />
                <br />
                {
                    this.props.position ?
                    <a
                        href={'/details/'+ this.props.user.id + '/' + this.props.position.lat + '/' + this.props.position.lng } >
                        @{this.props.user.username}
                    </a>
                    :
                    <a href={'https://www.instagram.com/' + this.props.user.username }>@{this.props.user.username}</a>
                }
                <br />
                <p>{this.props.user.full_name}</p>
            </div>
        );
    }
}

Profile.propTypes = {
    user: PropTypes.object.isRequired
};

export default Profile;


