import {characterPersonReducer} from '../redux/reducers/characterPersonReducer';

test('Should load users character onto page upon log in', () => {
    let action = {};
    let state = {loading: true};
    expect(characterPersonReducer(state, action)).toEqual({ loading: true })
})

test('When sent action.type GET_CHARACTER, should return undefined', () => {
    let action = {type: 'GET_CHARACTER'};
    let state = {loading: true};
    expect(characterPersonReducer(state, action)).toBe(undefined)
})

test('When sent ADD_CHARACTER type, should return character')