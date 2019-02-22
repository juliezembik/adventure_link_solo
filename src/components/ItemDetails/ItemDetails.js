import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemDetailItems from './ItemsDetail-Items';
import List from '@material-ui/core/List';


class ItemDetails extends Component {

    componentDidMount() {
        this.getItemsDetails();
    }

    getItemsDetails = () => {
        const id = this.props.user.id;
        const action = { type: 'FETCH_INVENTORY', payload: {id:id} };
        this.props.dispatch(action);

    }

    render() {


        return (
            <div>
                <h2>Inventory</h2>
                {this.props.item.map((iDetails, i) => {
                    return (
                        <List>
                        <ItemDetailItems key={i} iDetails={iDetails} />
                        </List>
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
