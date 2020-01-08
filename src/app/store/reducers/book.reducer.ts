
import {Action, createReducer, on} from '@ngrx/store';
import {addBook, BookType, delBook} from '@app/store/actions/book.action';

export const initStateBook: BookState = {
    bookList: []
};

// 定义初始化值的类型
export interface BookState {
    bookList: Array<BookType>;
}

const reducer = createReducer(
    initStateBook,
    on(addBook, (state, { book }) => {
        return { bookList: [...state.bookList, book] };
    }),
    on(delBook, (state, { book }) => {
        return { bookList: state.bookList.filter(item => item !== book) };
    })
);

export function bookReducer(state: BookState, action: Action) {
    return reducer(state, action);
}
