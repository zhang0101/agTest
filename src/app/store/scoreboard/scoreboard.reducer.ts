import {createReducer, createSelector, on} from '@ngrx/store';
import {increment, decrement, reset} from './scoreboard.actions';

export const initialState: InitState = {
    num: 0,
};

export interface InitState {
    num: number;
}


const counterReducers = createReducer(initialState,
    on(increment, state => {
        return {...state, num: state.num + 1};
    }),
    on(decrement, (state, {num}) => {
        if (num) {
            return {...state, num: state.num + num};
        } else {
            return {...state, num: state.num - num};
        }
    }),
    on(reset, (state, status) => {
        return {...state, num: 0};
    }),
)

export function counterReducer(state, action) {
    return counterReducers(state, action);
}

export const selectNum = (state: InitState) => state.num;
