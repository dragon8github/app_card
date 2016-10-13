# app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 关于转场过度的心得

首先要明白，涉及转场的操作目标一共有6个：
1、跳转页的“身体”；
2、跳转页的“头部(左右图标，标题)”;
3、跳转页的“底部”;

4、子页的“身体”；
5、子页的“头部(左右图标，标题)”;
6、子页的“底部”;


# 1、跳转页的“身体”；
出场和离场都是依靠vue提供的trantions。
譬如：

	  .cover-trantions{
	  	transition: all .35s ease;
	  }
	  .cover-enter,.cover-level{
      	transform: translate3d(100%, 0, 0);
      }

# 2、跳转页的“头部(左右图标，标题)”; 

