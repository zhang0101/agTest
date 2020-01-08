import {Action, createReducer, on} from '@ngrx/store';
import {addBreadcrumb, addBreadcrumbOne, BreadcrumbType} from '@store/actions/breadcrumb.action';


export const initStateBreadcrumb: BreadcrumbState = {
    breadcrumbList: []
};

// 定义初始化值的类型
export interface BreadcrumbState {
    breadcrumbList: Array<BreadcrumbType>;
}

const reducer = createReducer(
    initStateBreadcrumb,
    on(addBreadcrumb, (state, {data}) => {
        return {breadcrumbList: data};
    }),
    on(addBreadcrumbOne, (state, label) => {
        console.log(label.label)
        return {breadcrumbList: state.breadcrumbList};
    }),
);

export function BreadcrumbReducer(state: BreadcrumbState, action: Action) {
    return reducer(state, action);
}
