import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getItemDetails(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const id = action.payload.id;
        const response = yield axios.get(`/api/items/inventory/${id}`, config);
        console.log('Log in getItemDetailSaga', response.data);
        yield put({ type: 'GET_ITEM_DETAILS', payload: response.data })
    } catch (error) {   
        console.log('Item detail request failed', error);
    }
}

function* itemsSaga() {
    yield takeEvery('FETCH_ITEM_DETAILS', getItemDetails);
}

export default itemsSaga;