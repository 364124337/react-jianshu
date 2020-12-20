<h1 align="center">react-jianshu 👋</h1>

React 模仿简书Demo

## 🚀 如何运行

```
# 打开项目目录
cd jianshu
```

```
# 安装依赖
npm install
```

```
# 开启本地服务运行项目
npm run start
```

## 技术栈

### :point_right: 主要依赖

- create-react-app
- axios
- immutable
- react-loadable
- react-redux
- react-router-dom
- react-transition-group
- redux
- redux-immutable
- redux-thunk
- styled-components

## 实现的功能
- 公共头部
    - 登录/登出
    - 写文章（登录鉴权）
- 首页
    - 文章列表
    - 加载更多
- 详情页
    - 详情展示
- 登录页

## 项目结构
```
jianshu
├── public
│   ├── api
│   │   ├── detail.json
│   │   ├── headerList.json
│   │   ├── home.json
│   │   ├── homeList.json
│   │   └── login.json
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── common
│   │   └── header
│   ├── pages
│   │   ├── detail
│   │   ├── home
│   │   ├── login
│   │   └── writer
│   ├── statics
│   │   ├── iconfont
│   │   └── logo.png
│   ├── store
│   │   ├── index.js
│   │   └── reducer.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── style.js
├── .eslintcache
├── package-lock.json
├── package.json
└── README.md
```

## 预览

### 首页

![首页](public/preview/01.jpg)

### 详情页

![详情](public/preview/02.jpg)

### 登录页

![登录](public/preview/03.jpg)
