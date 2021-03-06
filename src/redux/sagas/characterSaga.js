import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* getCharacter() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`/api/character/`, config);
        yield put({ type: 'GET_CHARACTER', payload: response.data });
    } catch (error) {
        console.log('Character get request failed', error);
        
    }
}

function* getUserCharacter(action) {
    try {
        console.log('action.payload', action.payload);
        
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const id = action.payload;        
        const response = yield axios.get(`api/character/${id}`, config);
        console.log('response.data', response.data);
        const nextAction = { type: 'GET_CHARACTER', payload: response.data}
        yield put(nextAction);
    }   catch (error) {
        console.log('Get User Character request failed', error);
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

function* updateCharacter(action) {
    try {
        console.log('action.payload.characterID', action.payload.character_id);
        
        const id = action.payload.character_id;
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.put(`api/character/${id}`, action.payload, config);
        console.log('updateCharacter response: ', response.data);
        const nextAction = { type: 'GET_USER_CHARACTER', payload: id };
        yield put(nextAction);
    } catch (error) {
        console.log('Unable to update character', error);
        
    }
}

function* characterSaga() {
    yield takeEvery('FETCH_CHARACTER', getCharacter);
    yield takeEvery('ADD_CHARACTER', addCharacter);
    yield takeLatest('GET_USER_CHARACTER', getUserCharacter);
    yield takeLatest('UPDATE_CHARACTER', updateCharacter);
}

export default characterSaga;