import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import './Items.css'


function generate(element) {
    return [0].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

// handleDelete = (event) => {
//     event.preventDefault();
//     <Popup trigger={<button></button>}
// }

class ItemDetailItems extends Component {
    state = {
        open: true,
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };
    
    render() {
        return (
            <div>

                <Grid item xs={12} md={3}>
                    <div>
                            {generate(
                                <ListItem className="inventory-list">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img src={this.props.iDetails.item_img} alt="" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.props.iDetails.item_name}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton aria-label="Delete">
                                            <img src='/icons/delete.svg' alt="trash icon" />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )}

                    </div>
                </Grid>

            </div>
        );
    }
};


export default connect()(ItemDetailItems);
