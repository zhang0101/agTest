import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {bookReducer, BookState} from '@store/reducers/book.reducer';
import {BreadcrumbReducer, BreadcrumbState} from '@store/reducers/breadcrumb.reducer';


export interface State {
    book: BookState;
    breadcrumb: BreadcrumbState;
}


export const reducers: ActionReducerMap<State> = {
    book: bookReducer,
    breadcrumb: BreadcrumbReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

