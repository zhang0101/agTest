import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


// @ts-ignore
import {SexReformPipe} from '@pipe/sex-reform.pipe';

import {HighlightDirective} from '../directive/highlight.directive';

@NgModule({
  declarations: [SexReformPipe, HighlightDirective],
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
  ]
})
export class ShareModule {
}
