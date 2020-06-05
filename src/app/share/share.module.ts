import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {DirectiveModule} from '@app/directive/directive.module';
import {PipeModule} from '@pipe/pipe.module';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        DirectiveModule,
        PipeModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        NgZorroAntdModule,
        FormsModule,
        DirectiveModule,
        PipeModule,
    ]
})
export class ShareModule {
}
