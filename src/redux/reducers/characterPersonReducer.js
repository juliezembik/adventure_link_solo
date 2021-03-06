import { combineReducers } from 'redux';


const characterPersonReducer = (state = {loading: true}, action) => {
    switch(action.type) {
        case 'GET_CHARACTER':
            return action.payload;
        case 'ADD_CHARACTER':
            return action.payload;
        case 'UPDATE_CHARACTER':
            return action.payload;
        default:
            return state;
    }
};

const getUserCharacter = (state = '', action) => {
    switch(action.type) {
        case 'GET_USER_CHARACTER':
            return action.payload;
        default:
            return state;
    }
}

export { characterPersonReducer };

export default combineReducers({
    characterPersonReducer,
    getUserCharacter,
});