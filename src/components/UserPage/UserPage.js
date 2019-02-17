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
    const action = { type: 'GET_USER_CHARACTER', payload: this.props.user.id };
    this.props.dispatch(action)
  }

  render() {

    if(this.props.character.length === 0) {
      console.log('Character', this.props.character);
      
      this.props.history.push('/charactercreate'); 
    } 

    return (
      <div>
        <h1 id="welcome">
          Welcome, {this.props.user.username}!
    </h1>
        <p>Your ID is: {this.props.user.id}</p>
        {JSON.stringify(this.props.character)}
        <div>
          {this.props.character.map((userChara, i) => {
            return (
              <div key={i}>
                <p>Name: {userChara.character_name}</p>
                <p>Gender: {userChara.gender}</p>
                <p>Alignment: {userChara.alignment}</p>
                <p>Race: {userChara.race}</p>
                <p>Class: {userChara.person_class}</p>
                <p>Background: {userChara.background}</p>
              </div>
            )
          })}
        </div>

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
  character: state.character.characterPersonReducer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
