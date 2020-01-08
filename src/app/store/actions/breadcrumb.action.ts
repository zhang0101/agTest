import {createAction, props} from '@ngrx/store';
import {Params} from '@angular/router';

export interface BreadcrumbType {
    label: string;
    params: Params;
    url: string;
}

export const addBreadcrumb = createAction('[add Breadcrumb]', props<{ data: Array<BreadcrumbType> }>());
export const addBreadcrumbOne = createAction('[add Breadcrumb one]', (label) => ({label} as BreadcrumbType));
