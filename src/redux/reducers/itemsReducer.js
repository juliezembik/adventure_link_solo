const getItem = ( state = [], action ) => {
    switch (action.type) {
        case 'GET_INVENTORY':
            return action.payload;
        default:
            return state;
    }
};

export default getItem;
