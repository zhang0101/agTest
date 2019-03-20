import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from './product.component';

import {PlistComponent} from './components/plist/plist.component';
import {CartComponent} from './components/cart/cart.component';
import {PcontentComponent} from './components/pcontent/pcontent.component';

const routes: Routes = [
  {
    path: '', component: ProductComponent,
    children: [
      {
        path: '', redirectTo: 'plist'
      },
      {
        path: 'plist', component: PlistComponent, data: {title: '张震 -->plist', path: 'plist'}
      }, {
        path: 'cart', component: CartComponent, data: {title: '张震 -->cart', path: 'plist'}
      }, {
        path: 'pcontent', component: PcontentComponent, data: {title: '张震 -->pcontent', path: 'pcontent'}
      }, {
        path: 'test', data: {title: '张震 -->test'},
        loadChildren: './components/test/test.module#TestModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
