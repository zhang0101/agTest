import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TestComponent} from './test.component';
import {Test1Component} from './test1/test1.component';


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
})
export class TestRoutingModule {
}
