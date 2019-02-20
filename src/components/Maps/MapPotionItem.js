import React, { Component } from 'react';
import { Marker, InfoWindow } from 'google-map-react';
import { connect } from 'react-redux';

class MapPotionItem extends Component {

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '20px', width: '20px', borderRadius: '50%', backgroundColor: 'red' }}>
                <Marker
                    key={this.props.index}
                    position={{ lat: this.props.map.lat, lng: this.props.map.lng }}
                    label={this.props.index.toString()}
                    onClick={() => this.handleToggleOpen()}
                >

                    {
                        this.state.isOpen &&
                        <InfoWindow onCloseClick={this.props.handleCloseCall}>
                            <h1>{this.props.item}</h1>
                        </InfoWindow>
                    }


                </Marker>
            </div>
        );
    }
}



export default connect()(MapPotionItem);