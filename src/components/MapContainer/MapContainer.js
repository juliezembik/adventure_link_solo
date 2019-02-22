import React, { Component } from 'react';
import Map from './../Maps/Map';
import { connect } from 'react-redux';

class Container extends Component {
    render() {
        return (
            <div>
                <Map />
            </div>
        )
    }
}


export default connect()(Container);
