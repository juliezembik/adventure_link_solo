const characterPersonReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_CHARACTER':
            return action.payload;
        case 'ADD_CHARACTER':
            return action.payload;
        default:
            return state;
    }
};


export default characterPersonReducer;