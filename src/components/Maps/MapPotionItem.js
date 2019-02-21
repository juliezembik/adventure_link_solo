import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Marker, InfoWindow } from 'google-map-react';



class MapPotionItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    handleToggleOpen = (event) => {
        this.setState({
            isOpen: true
        });
    }

    handleToggleClose = (event) => {
        this.setState({
            isOpen: false
        });
    }
 

    render() {
        const lat = parseFloat(this.props.lat);
        const lng = parseFloat(this.props.lng);

        return (
            
            // Important! Always set the container height explicitly
            // <div style={{ height: '20px', width: '20px', borderRadius: '50%', backgroundColor: 'red' }}>
            <div>
                {JSON.stringify(this.props.lat)}
                {JSON.stringify(this.props.lng)}
                {JSON.stringify(this.props.text)}
                
                {this.state.isOpen ? (
                    <ul>
                        <li onClick={() => this.handleToggleClose()}>{this.props.text}</li>

                        <Marker
                            key={this.props.key}
                            id={this.props.key}
                            position={{ lat: lat, lng: lng }}
                            // defaultAnimation={}
                            onClick={() => this.handleToggleOpen(this.props.key)}>

                            <InfoWindow
                                id={this.props.key}
                                onCloseClick={() => this.setState({ isOpen: false })}>
                                <div key={this.props.key}>
                                    <h4>{this.props.text}</h4>
                                </div>
                            </InfoWindow>
                        </Marker>
                    </ul>

                ) : (

                        <ul>
                            <li onClick={() => this.handleToggleOpen()}>{this.props.text}</li>
                        </ul>

                    )
                }

            </div>

        );
    }
}


export default connect()(MapPotionItem);