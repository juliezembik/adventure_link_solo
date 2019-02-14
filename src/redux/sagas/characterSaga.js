import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* getCharacter() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('/api/character', config);
        yield put({ type: 'GET_CHARACTER', payload: response.data });
    } catch (error) {
        console.log('Character get request failed', error);
        
    }
}

function* addCharacter(action) {
    try {
        yield axios.post('/api/character/create', action.payload);
        const nextAction = { type: 'FETCH_CHARACTER' };
        yield put(nextAction);
    } catch (error) {
        console.log('Character add request failed', error);
        alert('Something went wrong in addCharacter')
    }
}

function* characterSaga() {
    yield takeLatest('FETCH_CHARACTER', getCharacter);
    yield takeEvery('ADD_CHARACTER', addCharacter);
}

export default characterSaga;