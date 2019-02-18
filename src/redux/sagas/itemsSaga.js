import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getItemDetails() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`/api/items`, config);
        yield put({ type: 'GET_ITEM_DETAILS', payload: response})
    } catch (error) {
        console.log('Item detail request failed', error);
    }
}

function* itemsSaga() {
    yield takeEvery('FETCH_ITEM_DETAILS', getItemDetails);
}

export default itemsSaga;