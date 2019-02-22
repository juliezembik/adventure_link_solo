import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getInventory(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const id = action.payload.id;
        const response = yield axios.get(`/api/items/inventory/${id}`, config);
        console.log('Log in getItemDetailSaga', response.data);
        yield put({ type: 'GET_INVENTORY', payload: response.data })
    } catch (error) {   
        console.log('Item detail request failed', error);
    }
}

function* addToInventory(action) {
    try {
        const id = action.payload.id;
        const response = yield axios.post(`/api/items/inventory/${id}`, action.payload)
        yield put({ type: 'FETCH_INVENTORY', payload: response.data })
    } catch (error) {
        console.log('Adding to inventory failed', error);
        
    }
}

function* getItemDescription() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`api/items`, config);
        console.log('Getting Item Description', response.data);
        yield put({ type: 'GET_ITEM_DESCRIPTION', payload: response.data })
    } catch(error) {
        console.log('Item Description request failed', error);
        
    }
}


function* itemsSaga() {
    yield takeEvery('FETCH_INVENTORY', getInventory);
    yield takeEvery('FETCH_ITEM_DESCRIPTION', getItemDescription);
    yield takeEvery('ADD_TO_INVENTORY', addToInventory);
}

export default itemsSaga;