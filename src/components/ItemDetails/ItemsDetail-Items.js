import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function generate(element) {
    return [0].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

class ItemDetailItems extends Component {
    state = {
        dense: false,
        secondary: false,
    };

    
    render() {
        const { dense, secondary } = this.state;
        return (
            <div>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className="item-detail">
                    <p>{this.props.iDetails.item_name}</p>
                    </Typography>
                    <div className="item-list">
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img src={this.props.iDetails.item_img} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.props.iDetails.item_description}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton aria-label="Delete">
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>,
                            )}
                        </List>
                    </div>
                </Grid>

            </div>
        );
    }
};


export default connect()(ItemDetailItems);
