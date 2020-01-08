import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './views/home/home.component';
import {AboutComponent} from './views/about/about.component';
import {HeaderComponent} from './components/header/header.component';
// @ts-ignore
import {ShareModule} from '@share/share.module';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {SoltComponent} from './components/solt/solt.component';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {UEditorModule} from 'ngx-ueditor';
import {LoadingComponent} from './components/loading/loading.component';
import {LoadingService} from '@app/service/loading.service';
import {BreadcrumbsService} from '@app/service/breadcrumbs.service';
import {CalendarWeekComponent} from './components/calendar-week/calendar-week.component';

registerLocaleData(zh);


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        HeaderComponent,
        SoltComponent,
        LoadingComponent,
        CalendarWeekComponent,
        // InputTrimDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ShareModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgScrollbarModule,
        UEditorModule.forRoot({
            js: [
                `./assets/ueditor/ueditor.config.js`,
                `./assets/ueditor/ueditor.all.min.js`,
            ],
            // 默认前端配置项
            options: {
                UEDITOR_HOME_URL: './assets/ueditor/'
            }
        })
    ],
    providers: [
        LoadingService,
        BreadcrumbsService,
        {provide: NZ_I18N, useValue: zh_CN},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
