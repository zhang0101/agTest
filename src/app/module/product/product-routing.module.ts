import {NgModule} from '@angular/core';
import {Routes, RouterModule, RouteReuseStrategy} from '@angular/router';
import {ProductComponent} from './product.component';

import {PlistComponent} from './components/plist/plist.component';
import {CartComponent} from './components/cart/cart.component';
import {PcontentComponent} from './components/pcontent/pcontent.component';

const routes: Routes = [
  {
    path: '', component: ProductComponent,
    children: [
      // {
      //   path: '', redirectTo: 'plist'
      // },
      {
        path: 'plist', component: PlistComponent, data: { breadcrumb: '商品列表'}
      }, {
        path: 'cart', component: CartComponent, data: { breadcrumb: '购物车'}
      }, {
        path: 'pcontent', component: PcontentComponent, data: { breadcrumb: '内容展示'}
      }, {
        path: 'test', data: { breadcrumb: '', keep: true},
        loadChildren: () => import('./components/test/test.module').then(m => m.TestModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {
}
