import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {AboutComponent} from './views/about/about.component';


const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./module/user/user.module').then(m => m.UserModule),
        // loadChildren: './module/user/user.module#UserModule',
        data: {breadcrumb: '用户模块'}
    },
    {
        path: 'product', loadChildren: () => import('./module/product/product.module').then(m => m.ProductModule),
        data: {breadcrumb: '产品模块'}
    },
    {
        path: 'article',
        loadChildren: () => import('./module/article/article.module').then(m => m.ArticleModule),
        data: {breadcrumb: '评论'}
    },
    {
        path: 'home/:id', component: HomeComponent,
        data: {breadcrumb: '主页'}
    }, {
        path: 'about', component: AboutComponent,
        data: {breadcrumb: '关于'}
    },
    /*{
        path: '**', redirectTo: 'user'
    },*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor() {
    }

}
