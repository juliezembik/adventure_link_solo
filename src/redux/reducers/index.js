import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import character from './characterPersonReducer';
import map from './mapReducer';
import item from './itemsReducer';
import player from './playerOnMapReducer';
import events from './eventsReducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  character, // contains character created by user
  map, //sends items with lng and lat to append onto the map
  item, //calls items from data base
  player, //calls player sprite to move on map
  events,
});

export default rootReducer;
