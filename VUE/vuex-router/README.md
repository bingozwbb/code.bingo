# vuex-router

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## VUE 最难的是数据管理 MVVM
- 1.0时代， 组件在我们眼里是最大的，
    data() 私有状态, 自给自足的状态 不足以成为一个应用
- 2.0时代， 很多的组件，
    组件的层次以及关系， 兄弟组件，共享数据的时候，找到共同的父组件，管理这个状态，通过prop+emit方式 登录，
- 3.0时代 vuex 简单项目不要用它，
    管理应用状态 2.0太麻烦 
    跨组件 跨层级 轻松共享应用状态
    很多组件 多个路由 要共享太多的状态时 他太有用了