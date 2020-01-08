import { createAction, props } from '@ngrx/store';

export interface BookType {
    bookName: string;
}

export const addBook = createAction('[add book]', props<{ book: BookType }>());
export const delBook = createAction('[del book]', props<{ book: BookType }>());
