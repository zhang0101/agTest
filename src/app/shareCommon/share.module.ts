import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AppStoreModule} from '@app/store/store.module';

import {SexReformPipe} from '@pipe/sex-reform.pipe';

import {HighlightDirective} from '@app/directive/highlight.directive';
import {InputTrimDirective} from '@app/directive/input-trim.directive';
import {BreadcrumbComponent} from '@app/components/breadcrumb/breadcrumb.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {Router, RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        SexReformPipe,
        HighlightDirective,
        InputTrimDirective,
        BreadcrumbComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        FormsModule,
        RouterModule,
        AppStoreModule,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        AppStoreModule,
        NgZorroAntdModule,
        FormsModule,
        SexReformPipe,
        HighlightDirective,
        BreadcrumbComponent,
        InputTrimDirective
    ]
})
export class ShareModule {
}
