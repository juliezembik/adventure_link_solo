import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Axios from 'axios';
import { connect } from 'react-redux';


const AnyReactComponent = ({ text }) => <div>{text} X</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 44.978031,
            lng: -93.2656897
        },
        zoom: 15
    };

    componentDidMount() {
        this.getMap();
    }

    getMap = () => {
        Axios({
            method: 'GET',
            url: '/api/mapclient'
        }).then((response) => {
            console.log('in map GET', response);
            const action = {
                type: 'GET_MAP',
                payload: response.data
            };
            this.props.dispatch(action)
        }).catch((error) => {
            console.log('Error in GET map', error);
            
        });
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                {JSON.stringify(this.props.map)}
                <GoogleMapReact
                    bootstrapURLKeys={{ key: `AIzaSyAPCKg-TyVSp-AA_O5hCFb2uz_vPnAxKmE` }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                {this.props.map.map((waypoint, i) => {
                    return (
                        <AnyReactComponent
                            key={i}
                            lat={waypoint.lat}
                            lng={waypoint.lng}
                            text={waypoint.text}
                        />
                    );
                    
                })}
                    
                </GoogleMapReact>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    map: state.map,
});
export default connect(mapStateToProps)(SimpleMap);