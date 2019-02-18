import React, { Component } from 'react';
import { connect } from 'react-redux';


class ItemDetails extends Component {

    componentDidMout() {
        this.getItemsDetails();
    }

    getItemsDetails = () =>{
        const action = { type: 'FETCH_ITEM_DETAILS'};
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <h2>Item Details</h2>
                {JSON.stringify(this.props.item)}
            </div>
        )
    };
};

const mapStateToProps = (state) => ({
    item: state.item,
});


export default connect(mapStateToProps)(ItemDetails);
