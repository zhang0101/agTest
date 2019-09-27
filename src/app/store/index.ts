import * as a from '@app/store/scoreboard/scoreboard.reducer';
import * as b from '@app/store/login/scoreboard.reducer';
import {createSelector} from '@ngrx/store';


export const AppReducers = {
    infoAuth: a.counterReducer,
    infoLogin: b.loginReducer
};

export interface AppState {
    infoAuth: a.InitState;
    infoLogin: b.InitState;
}

const loginFn = (state: AppState) => state.infoAuth;
export const selectNum = createSelector(loginFn, a.selectNum);


const infoFn = (state: AppState) => state.infoLogin;
export const selectInfo = createSelector(infoFn, b.selectInfo);
