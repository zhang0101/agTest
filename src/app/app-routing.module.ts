import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {AboutComponent} from './views/about/about.component';


const routes: Routes = [
  {
    path: 'user', loadChildren: './module/user/user.module#UserModule', data: {title: 'USER -- 张震', path: 'user'}
  },
  {
    path: 'product', loadChildren: './module/product/product.module#ProductModule',
  },
  {
    path: 'article', loadChildren: './module/article/article.module#ArticleModule', data: {title: 'ARTICLE -- 张震', path: 'article'}
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
