import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {

  componentDidMount() {
    this.getUserCharacter();
  }

  getUserCharacter = () => {
    const action = { type: 'FETCH_CHARACTER' };
    this.props.dispatch(action)
  }

  render() {
    return (
      <div>
        <h1 id="welcome">
          Welcome, {this.props.user.username}!
    </h1>
        <p>Your ID is: {this.props.user.id}</p>
        {JSON.stringify(this.props.character)}
        {/* <p>Character Name: {this.state.}</p> */}

        <LogOutButton className="log-in" />
      </div>
    );
    
  }

}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
  character: state.character,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
