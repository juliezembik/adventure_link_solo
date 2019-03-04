import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    addToInventory = () => {
        const id = this.props.user.id;
        const action = { type: 'ADD_TO_INVENTORY', payload: id }
        this.props.dispatch(action)
    }

    render() {
        const style = ({
            height: 'auto',
            width: '160px',
            backgroundColor: '#FFFFFF',
            margin: '10px',
            borderRadius: '10%',
            padding: '10px',
            border: '1px',
            fontSize: '12px'


        })

        return (

            // Important! Always set the container height explicitly
            <div>
            <div>
                {/* {JSON.stringify(this.props.lat)}
                {JSON.stringify(this.props.lng)}
                {JSON.stringify(this.props.text)} */}
                    {this.state.isOpen ? (<div onClick={this.handleToggle}><QuestMarker /></div>) 
                        : 
                    (<div style={style} onClick={this.handleToggle}><h3>{this.props.eventName}</h3>
                                                                        <p>{this.props.event_description}</p>
                                                                        <button onClick={this.addToInventory}>Do it!</button>
                                                                        <button>Cancel</button></div>) }

            </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(MapPotionItem);