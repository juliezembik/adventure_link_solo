import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Marker, InfoWindow } from 'google-maps-react';
import QuestMarker from '../Player/QuestMarker';



class MapPotionItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    handleToggle = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        const style = ({
            height: '200px',
            width: '200px',


        })

        return (

            // Important! Always set the container height explicitly
            <div>
            <div>
                {JSON.stringify(this.props.lat)}
                {JSON.stringify(this.props.lng)}
                {JSON.stringify(this.props.text)}
                    {this.state.isOpen ? (<div onClick={this.handleToggle}><QuestMarker /></div>) 
                        : 
                    (<div className={{ style }} onClick={this.handleToggle}><p>{this.props.eventName}</p>
                                                                        <p>{this.props.event_description}</p></div>) }

            </div>
            </div>

        );
    }
}


export default connect()(MapPotionItem);