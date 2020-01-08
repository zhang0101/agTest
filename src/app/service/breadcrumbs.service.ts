import {Injectable} from '@angular/core';
import {filter} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router} from '@angular/router';

import {Store} from '@ngrx/store';
import {AppStoreModule} from '@store/store.module';
import {addBreadcrumb, BreadcrumbType} from '@store/actions';


@Injectable({
    providedIn: 'root'
})
export class BreadcrumbsService {
    breadcrumbs: BreadcrumbType[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private store: Store<AppStoreModule>
    ) {
    }

    initBreadcrumbs() {
        this.router.events.pipe(filter(event => (event instanceof NavigationEnd))).subscribe(event => {
            const root: ActivatedRoute = this.activatedRoute.root;
            this.breadcrumbs = this.getBreadcrumbs(root);
            this.breadcrumbs = this.breadcrumbs.reduce((x, y) => x.findIndex(e => e.label === y.label) < 0 ? [...x, y] : x, []);

            this.store.dispatch(addBreadcrumb({data: this.breadcrumbs}));
        });
    }

    getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbType[] = []): BreadcrumbType[] {
        const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
        const children: ActivatedRoute[] = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }
            const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
            if (routeURL) {
                url += `/${routeURL}`;
            }
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            const bread: BreadcrumbType = {
                label: child.snapshot.data.breadcrumb,
                params: child.snapshot.params,
                url
            };
            breadcrumbs.push(bread);
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
}
