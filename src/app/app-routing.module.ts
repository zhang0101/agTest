import {NgModule} from '@angular/core';
import {Routes, RouterModule, RouteReuseStrategy} from '@angular/router';

const routes: Routes = [
    {
        path: 'user/:id',
        loadChildren: () => import('./module/user/user.module').then(m => m.UserModule),
        // loadChildren: './module/user/user.module#UserModule',
        data: {breadcrumb: '用户模块'}
    },
    {
        path: 'product/:id', loadChildren: () => import('./module/product/product.module').then(m => m.ProductModule),
        data: {breadcrumb: '产品模块'}
    },
    {
        path: 'article',
        loadChildren: () => import('./module/article/article.module').then(m => m.ArticleModule),
        data: {breadcrumb: '评论'}
    },
    /*{
        path: '**', redirectTo: 'user'
    },*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
    constructor() {
        console.log(1);
    }

}
