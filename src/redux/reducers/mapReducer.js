
//map reducer that appends googlemaps onto the dom
const map = (state = [], action) => {
    if( action.type === 'GET_MAP') {
        return action.payload;
    }
    return state;
}

export default map;