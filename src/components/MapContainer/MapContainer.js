import React, { Component } from 'react';
import GoogleApiComponent from 'react-google-maps-api';
import Map from './../Maps/Map';

class Container extends Component {
    render() {
        return (
            <div>
                <Map />
            </div>
        )
    }
}

export default Container;
