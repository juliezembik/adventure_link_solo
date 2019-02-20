import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getMapLocations() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('/api/mapclient', config);
        console.log('log in getMapLocations', response.data);
        yield put({ type: 'GET_MAP', payload: response.data });
    } catch (error) {
        console.log('getMapLocation error: ', error);
        
    }
}

function* mapSaga() {
    takeEvery('FETCH_MAP', getMapLocations);
}

export default mapSaga;