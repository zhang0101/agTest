import {BreadcrumbState} from './../reducers/breadcrumb.reducer';
import {createSelector} from '@ngrx/store';

const selectBreadcrumbStates = (state: BreadcrumbState) => state;

export const getBreadcrumbList = createSelector(selectBreadcrumbStates, (state: BreadcrumbState) => state.breadcrumbList);
