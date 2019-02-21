import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import Player from './../Player/DefaultPlayer';
import MapPotionItem from './MapPotionItem';




// const AnyReactComponent = ({ text }) => <div>{text} X</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 44.978180,
            lng: -93.2634000
        },
        zoom: 19
    };

    componentDidMount() {
        this.getMap();
    }

    getMap = () => {
            const action = { type: 'FETCH_MAP' };
            this.props.dispatch(action)
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                {/* {JSON.stringify(this.props.map)} */}
                <GoogleMapReact
                    bootstrapURLKeys={{ key: `AIzaSyAPCKg-TyVSp-AA_O5hCFb2uz_vPnAxKmE` }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Player
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                    />
                        
                {this.props.map.map((waypoints, i) => {
                    let waypoint = Object.assign({}, waypoints);
                    return (
                        
                        <MapPotionItem
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