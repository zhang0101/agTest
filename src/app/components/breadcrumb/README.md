## 面包屑导航使用
### module
eg: {
        path: 'user',
        loadChildren: '',
        data: {title: '用户模块', breadcrumb: 'user'}
 }
### component

 eg: {
          path: 'home',
          component: '',
          data: {title: '用户模块', breadcrumb: 'home'}
  }
 
 ## 注事事项
 ####使用时：
- component可以不配置data,
- module中必修添加data: {breadcrumb: 'user'}, breadcrumb: 必填
- title 不填写时，对应的面包屑不展示
 
