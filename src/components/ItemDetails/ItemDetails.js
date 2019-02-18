import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// // import FolderIcon from '@material-ui/core/FolderIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import IconButton from '@material-ui/core/IconButton';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import DeleteIcon from '@material-ui/core/DeleteIcon';


function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

class ItemDetails extends Component {
    state = {
        dense: false,
        secondary: false,
    };

    componentDidMount() {
        this.getItemsDetails();
    }

    getItemsDetails = () => {
        const action = { type: 'FETCH_ITEM_DETAILS', payload: this.props.user.id };
        this.props.dispatch(action);

    }

    render() {
        const { classes } = this.props;
        const { dense, secondary } = this.state;

        return (
            <div>
                <h2>Item Details</h2>
                {JSON.stringify(this.props.item)}
                {/* {this.props.item.map((holdingBag) => {
                    
                    return(

                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className="item-detail">
                            {holdingBag.item_name}
                        </Typography>
                        <div className="item-list">
                            <List dense={dense}>
                                { generate(
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={ secondary ? 'Secondary text' : null }
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
                    )
                })} */}
            </div>
        )
    };
};

const mapStateToProps = (state) => ({
    item: state.item,
    user: state.user,
});


export default connect(mapStateToProps)(ItemDetails);
