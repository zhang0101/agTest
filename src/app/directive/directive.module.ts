import {NgModule} from '@angular/core';
import {HighlightDirective} from '@app/directive/highlight.directive';
import {InputTrimDirective} from '@app/directive/input-trim.directive';


@NgModule({
    declarations: [HighlightDirective, InputTrimDirective],
    exports: [HighlightDirective, InputTrimDirective]
})
export class DirectiveModule {
}
