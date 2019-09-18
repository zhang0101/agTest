import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {AboutComponent} from './views/about/about.component';


const routes: Routes = [
  {
    path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule), data: {title: 'USER -- 张震',  breadcrumb: 'user'}
  },
  {
    path: 'product', loadChildren: () => import('./module/product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'article', loadChildren: () => import('./module/article/article.module').then(m => m.ArticleModule), data: {title: 'ARTICLE -- 张震', breadcrumb: 'article'}
  },
  {
    path: '**', redirectTo: 'user'
  },
  {
    path: 'home/:id', component: HomeComponent
  }, {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }

}
