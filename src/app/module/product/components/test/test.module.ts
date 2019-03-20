import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestRoutingModule} from './test-routing.module';
import {TestComponent} from './test.component';
import {Test1Component} from './test1/test1.component';
// @ts-ignore
import {ShareModule} from '@share/share.module';

@NgModule({
  declarations: [TestComponent, Test1Component],
  imports: [
    CommonModule,
    TestRoutingModule,
    ShareModule
  ]
})
export class TestModule {
}
