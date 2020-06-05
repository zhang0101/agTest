import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '@app/app-routing.module';
import {ShareModule} from '@share/share.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ServiceModule} from '@service/service.module';
import {PagesModule} from '@app/pages/pages.module';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {UEditorModule} from 'ngx-ueditor';
import {AppStoreModule} from '@store/store.module';
import { IonicModule } from '@ionic/angular';

registerLocaleData(zh);

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        ShareModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ServiceModule,
        PagesModule,
        AppRoutingModule,
        NgScrollbarModule,
        AppStoreModule,
        UEditorModule.forRoot({
            js: [
                `./assets/ueditor/ueditor.config.js`,
                `./assets/ueditor/ueditor.all.min.js`,
            ],
            // 默认前端配置项
            options: {
                UEDITOR_HOME_URL: './assets/ueditor/'
            }
        }),
        IonicModule.forRoot()
    ],
    exports: [
        ShareModule,
        PagesModule,
        AppStoreModule,
        AppRoutingModule,
        NgScrollbarModule,
        UEditorModule,
        IonicModule
    ],
    providers: [
        {provide: NZ_I18N, useValue: zh_CN},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
})
export class CoreModule {
    constructor(
        @SkipSelf() @Optional() parentModules: CoreModule,
    ) {
        if (parentModules) {
            throw new Error('CoreModule 只能本AppModule引入');
        }
    }
}
