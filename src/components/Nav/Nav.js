import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Link } from 'react-router-dom';
import './Nav.css';

const ITEM_HEIGHT = 48;

const options = [
  <Link to="/home">Home</Link>,
  <Link to="/userpage">Character Page</Link>,
  <Link to="/items">Inventory</Link>
];

const player = `Player`;

class Nav extends Component {
  constructor(){
    super();
  this.state = {
    anchorEl: null,
    player: 'Player',
  };
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className="nav-link">
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        <h3 id="welcome">
          Welcome, {this.props.user.name ? <p>Player!</p> : <p>{this.props.user.username}!</p>}</h3>
        <div className="nav-right">
        <Link className="nav-link" to="/home">
          {/* Show this link if they are logged in or not,
                         but call this link 'Home' if they are logged in,
                        and call this link 'Login / Register' if they are not */}
          {this.props.user.id ? 'Home' : 'Login / Register'}
        </Link>
        </div>
      </div>
    )
  }
}

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
