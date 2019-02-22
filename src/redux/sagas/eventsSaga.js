import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* getEvents() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('/api/events', config);
        yield put({
            type: 'GET_EVENTS', payload: response.data
        })

    } catch (error) {
        console.log('Something went wrong in Events Saga', error);
        alert('Unable to get response from events')
    }
}

function* eventsSaga() {
    yield takeEvery('FETCH_EVENTS', getEvents);
}

export default eventsSaga;