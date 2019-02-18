const getItem = ( state = [], action ) => {
    switch (action.type) {
        case 'FETCH_ITEM_DETAILS':
            return action.payload;
        default:
            return state;
    }
};

export default getItem;
