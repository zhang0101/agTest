import {Component, OnInit} from '@angular/core';
// import {RouterActionService} from '../shared/services/public/router-action/router-action.service';
import {ActivatedRoute, Router, ParamMap, Params, NavigationEnd, PRIMARY_OUTLET} from '@angular/router';
import {filter} from 'rxjs/operators';


interface IBreadcrumb {
  label: string; // 用于显示的path
  params?: Params; // 跳转时所带参数
  url: string; // 跳转的url
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: IBreadcrumb[];

  constructor(
    // private routerAction: RouterActionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    // const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    const ROUTE_DATA_BREADCRUMB = 'title';
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      const root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'title';

// 获取子路由
    const children: ActivatedRoute[] = route.children;

// 如果没有子路由
    if (children.length === 0) {
      return breadcrumbs;
    }

// 循环每个子路由
    for (const child of children) {
      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

// verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

// get the route's URL segment
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
// append route URL to URL
      url += `/${routeURL}`;

// add breadcrumb
      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url
      };
      breadcrumbs.push(breadcrumb);

// recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

// we should never get here, but just in case
    return breadcrumbs;

  }

}
