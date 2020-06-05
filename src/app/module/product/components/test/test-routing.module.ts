import {NgModule} from '@angular/core';
import {Routes, RouterModule, RouteReuseStrategy} from '@angular/router';

import {TestComponent} from './test.component';
import {Test1Component} from './test1/test1.component';
import {RouteStrategyService} from "@app/route-strategy.service";


const routes: Routes = [
  {
    path: '', component: TestComponent,
    children: [{
      path: 'test1', component: Test1Component, data: {title: '测试内容', breadcrumb: 'test1'},
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
    providers: [{ provide: RouteReuseStrategy, useClass: RouteStrategyService }],
})
export class TestRoutingModule {
}
