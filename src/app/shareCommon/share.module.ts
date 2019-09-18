import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


// @ts-ignore
import {SexReformPipe} from '@pipe/sex-reform.pipe';

import {HighlightDirective} from '@app/directive/highlight.directive';
import {InputTrimDirective} from '@app/directive/input-trim.directive';

@NgModule({
    declarations: [SexReformPipe, HighlightDirective, InputTrimDirective],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SexReformPipe,
        HighlightDirective,
        InputTrimDirective
    ]
})
export class ShareModule {
}
