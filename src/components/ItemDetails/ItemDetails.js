import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemDetailItems from './ItemsDetail-Items';


class ItemDetails extends Component {

    componentDidMount() {
        this.getItemsDetails();
    }

    getItemsDetails = () => {
        const id = this.props.user.id;
        const action = { type: 'FETCH_ITEM_DETAILS', payload: {id:id} };
        this.props.dispatch(action);

    }

    render() {


        return (
            <div>
                <h2>Item Details</h2>
                {JSON.stringify(this.props.item)}
                {JSON.stringify(this.props.user.id)}
                {this.props.item.map((iDetails, i) => {
                    return (
                        <ItemDetailItems key={i} iDetails={iDetails} />
                    )
                })}
            </div>
        )
    };
};

const mapStateToProps = (state) => ({
    item: state.item,
    user: state.user,
});


export default connect(mapStateToProps)(ItemDetails);
