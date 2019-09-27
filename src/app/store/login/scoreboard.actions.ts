import {createAction, props} from '@ngrx/store';

export enum Enum {
    login = '[Login Component] Login',
}
export const login = createAction(
    Enum.login, props<{ info: object }>()
)
