import {createAction, props} from '@ngrx/store';

export enum Enum {
    increment = '[Counter Component] Increment',
    decrement = '[Counter Component] Decrement',
    reset = '[Counter Component] Reset',
    login = '[Login Component] Login',
}

export const increment = createAction(Enum.increment);
export const decrement = createAction(
    Enum.decrement,
    props<{ num: number }>()
);
export const reset = createAction(Enum.reset, props<[boolean]>());
