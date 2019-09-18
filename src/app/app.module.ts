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
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {SoltComponent} from './components/solt/solt.component';
import { conterReducer } from '@app/store/app';
import {StoreModule} from '@ngrx/store';

import {NgScrollbarModule} from 'ngx-scrollbar';
import { LoadingComponent } from './components/loading/loading.component';
import {LoadingService} from '@app/service/loading.service';
registerLocaleData(zh);


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        HeaderComponent,
        SoltComponent,
        LoadingComponent,
        // InputTrimDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ShareModule,
        BrowserAnimationsModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        NgScrollbarModule,
        StoreModule.forRoot({count: conterReducer})
    ],
    providers: [LoadingService,{provide: NZ_I18N, useValue: zh_CN}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
