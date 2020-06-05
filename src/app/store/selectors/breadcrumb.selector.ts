import {BreadcrumbState} from './../reducers/breadcrumb.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const selectBreadcrumbStates = (state: BreadcrumbState) => state;
export const getBreadcrumb = createFeatureSelector<BreadcrumbState>('breadcrumb');
export const getBreadcrumbList = createSelector(selectBreadcrumbStates, (state: BreadcrumbState) => state.breadcrumbList);
