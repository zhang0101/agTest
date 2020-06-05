import {Component, OnInit, AfterViewChecked, Input} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router} from '@angular/router';
// import {BreadcrumbsService} from '@app/service/breadcrumbs.service';
import {select, Store} from '@ngrx/store';
import {AppStoreModule} from '@store/store.module';
import {getBreadcrumb, getBreadcrumbList} from '@store/selectors';
import {addBreadcrumbOne} from '@store/actions';

interface IBreadcrumb {
    label: string; // 用于显示的path
    params?: Params; // 跳转时所带参数
    url: string; // 跳转的url
}

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit, AfterViewChecked {
    breadcrumbs: any;
    @Input() data;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        // private breadcrumbsService: BreadcrumbsService,
        private store: Store<AppStoreModule>
    ) {
        const a = this.store.pipe(select(getBreadcrumb));
        this.store.pipe(select(getBreadcrumb), select(getBreadcrumbList)).subscribe(res => {
            this.breadcrumbs = res;
        });
        this.store.dispatch(addBreadcrumbOne('添加子级'));
    }

    ngAfterViewChecked(): void {

    }

    ngOnInit() {

    }
}
