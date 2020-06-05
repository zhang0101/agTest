import {NgModule} from '@angular/core';
import {SexReformPipe} from '@pipe/sex-reform.pipe';



@NgModule({
    declarations: [SexReformPipe],
    exports: [SexReformPipe]
})
export class PipeModule {
}
