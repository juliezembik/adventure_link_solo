import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css'
import ModalEdit from '../CharacterCreationPage/ModalEdit';

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

  handleEdit = () => {
    this.props.history.push('/edit');
  }

  openModal = (e) => {
    e.preventDefault();
    this.modal.open();
  }

  render() {

    if (Object.entries(this.props.character).length === 0) {
      console.log('Character', this.props.character);

      this.props.history.push('/charactercreate');
    }

    const userChara = this.props.character;
    return (
      <div>
        {/* <p>Your ID is: {this.props.user.id}</p> */}
        {/* {JSON.stringify(this.props.character)} */}
        <div>
            <div>
              <p>Character name: {userChara.character_name}</p>
              <p>Gender: {userChara.gender}</p>
              <p>Alignment: {userChara.alignment}</p>
              <p>Race: {userChara.race}</p>
              <p>Class: {userChara.person_class}</p>
              <p>Background: {userChara.background}</p>
            </div>

          

        </div>
        <ModalEdit />
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
