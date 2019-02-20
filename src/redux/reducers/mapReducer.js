
//map reducer that appends googlemaps onto the dom
const map = (state = [], action) => {
    switch(action.type) {
        case 'GET_MAP':
            return action.payload;
        default:
            return state;
    }
};

export default map;