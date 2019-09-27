import {createReducer, on} from '@ngrx/store';
import {login} from './scoreboard.actions';

export const initLoginState: InitState = {
    infoLogin: JSON.parse(localStorage.getItem('infoLogin')) ? JSON.parse(localStorage.getItem('infoLogin')) : {}
};

export interface InitState {
    infoLogin: object;
}


const loginReducers = createReducer(initLoginState,
    on(login, (state, info) => {
        return {...state, infoLogin: info};
    })
)

export function loginReducer(state, action) {
    return loginReducers(state, action);
}


export const selectInfo = (state: InitState) => state.infoLogin;
