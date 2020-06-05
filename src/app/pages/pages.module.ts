import {NgModule} from '@angular/core';
import {BreadcrumbComponent} from '@app/components/breadcrumb/breadcrumb.component';
import {HeaderComponent} from '@app/components/header/header.component';
import {SoltComponent} from '@app/components/solt/solt.component';
import {LoadingComponent} from '@app/components/loading/loading.component';
import {CalendarWeekComponent} from '@app/components/calendar-week/calendar-week.component';
import {ShareModule} from '@share/share.module';


@NgModule({
    declarations: [
        BreadcrumbComponent,
        HeaderComponent,
        SoltComponent,
        LoadingComponent,
        CalendarWeekComponent,
    ],
    imports: [
        ShareModule,
    ],
    exports: [
        HeaderComponent,
        SoltComponent,
        LoadingComponent,
        CalendarWeekComponent,
        BreadcrumbComponent,
    ]

})
export class PagesModule {
}
