# Sowing

![sowing-logo](https://user-images.githubusercontent.com/82022020/141731887-d13890e7-93e7-4495-ad99-3397e1b4a3e9.png)

Sowing 是一個結合 To-do list、排序時間軸以及地圖標示的網站，能讓使用者以輕鬆、簡易的方式記錄自己的旅遊行程。

## Demo

![site-intro](https://user-images.githubusercontent.com/82022020/141728638-c8730f3f-4815-497f-81d2-c6fff28662b0.gif)

專案網站： [Sowing](https://yichennnn36.github.io/Sowing/)

 - Test User：sowing01
 - Password：sowing01

## Technologies

- React
  - React hook
  - React Redux Toolkit
  - React Router
  - React DnD
  - PropTypes
- Styled-components
- Responsive Web Design(RWD)
- Single Page Application(SPA)
- Module bundler: Webpack
- Version Control: Git, GitHub
- Package Manger: NPM

## Features

- 前台
  - 使用說明瀏覽
  - 登入註冊功能
- 後台
  - 使用者
    - 新增、刪除、編輯旅行票卡
    - 拖曳更改狀態、分類過濾顯示
    - 個人化排序時間軸
    - 搜尋旅行票卡
    - 圖形化行程分布

### Board - 新增旅行票卡

![sowing-add](https://user-images.githubusercontent.com/82022020/141735594-1be2f36b-7c75-48d8-a8db-6eaf6574aa2d.gif)

### Board - 編輯旅行票卡

![sowing-edit](https://user-images.githubusercontent.com/82022020/141746932-183653fc-94bb-4ddc-abe1-6c632f4d91f8.gif)

### Board - 刪除旅行票卡

![sowing-delete](https://user-images.githubusercontent.com/82022020/141738233-73494c23-dcbe-492f-831a-86736fe4b370.gif)

### Board - Drag & Drop

![sowing-dragdrop](https://user-images.githubusercontent.com/82022020/141747461-965a594b-d87c-4ec1-8175-41d2e05f2918.gif)

### Board - 分類按鈕

![sowing-filter](https://user-images.githubusercontent.com/82022020/141748270-6d45ea86-624c-4a44-b765-7cfddbf005af.gif)

### Time - 旅行紀錄時間軸、搜尋功能

![sowing-time](https://user-images.githubusercontent.com/82022020/141751399-c8814885-79a4-470c-be67-f8de5c020274.gif)

### Map - 旅行地點分布圖、以地區分類的旅行票卡

![sowing-map](https://user-images.githubusercontent.com/82022020/141751422-e00509bb-4a55-4b9f-a87c-ac143ad98257.gif)

## 專案架構

```
.
├── .env                       # 環境變數存放處                   
├── .gitignore
├── LICENSE
├── README.md
├── yarn.lock
├── package.json
├── public
│   ├── index.html
│   └── sowing.ico
└── src
    ├── components                  
    │   ├── Column
    │   ├── FilterButton
    │   ├── Footer
    │   ├── Header           
    │   ├── Input
    │   ├── Loading
    │   ├── Login
    │   ├── MapInformation
    │   ├── Menu
    │   ├── Register
    │   ├── Search
    │   ├── Ticket
    │   ├── TicketEditor
    │   └── Timeline
    ├── constants                 # 包括 global style、共用 style 以及 error、success 訊息統整 
    ├── hooks                     # Custom hooks
    ├── images
    ├── pages                       
    │   ├── Board                 # 後台 Bulletin board 頁面
    │   ├── IntroPage             # 前台介紹頁／登入畫面／註冊畫面
    │   ├── Map                   # 後台 Map 旅行地點分布圖
    │   └── Time                  # 後台 Time 旅行紀錄時間軸
    ├── redux  
    │   ├── reducers
    │   │   ├── ticketReducer.js  # 處理後台新增、刪除、取得、編輯、拖曳等事件
    │   │   └── userReducer.js    # 處理登入、註冊事件
    │   └── store.js              # configureStore
    ├── App.js
    ├── api.js                    # 所有的 api，使用 fetch
    ├── index.js
    └── utils.js                  # 共用功能與 initialData
```

## Backend

[專案後端](https://github.com/yichennnn36/Sowing/tree/main/backend)

## License
