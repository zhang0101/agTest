import {Action} from '@ngrx/store';
import {ActionTypes} from './app.actions';
import {CounterState} from './app.state';

const initialState: CounterState = {count: 0};

export function conterReducer(state = initialState, action: Action) {
    switch ( action.type ) {
        case ActionTypes.Increment:
            state.count++
            return {count: state.count};
        case ActionTypes.Decrement:
            state.count--
            return {count: state.count};
        case ActionTypes.Reset:
            state.count = 0
            return {count: state.count};
        default:
            return state;
    }
}
