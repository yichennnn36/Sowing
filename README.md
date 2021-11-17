# Sowing

![sowing-logo](https://user-images.githubusercontent.com/82022020/141731887-d13890e7-93e7-4495-ad99-3397e1b4a3e9.png)

Sowing 是一個結合 To-do list、排序時間軸以及圖形標示紀錄的網站，能讓使用者以輕鬆、簡易的方式記錄屬於自己的台灣旅行紀錄票卡。

旅行票卡如同一顆種子，以播種的概念來呈現，將票卡分為播種中（Sowing）、澆水中（Watering）、發芽成長中（Sprouting），如同待辦清單中的 Todo、Doing、Done 方式表現，並將旅行目的地以圖形化的方式呈現，標示出未來或是過去所到過的地區。

## Contents

- [Demo](https://github.com/yichennnn36/Sowing/tree/main/frontend#demo)
- [Technologies](https://github.com/yichennnn36/Sowing/tree/main/frontend#technologies)
- [功能架構](https://github.com/yichennnn36/Sowing/tree/main/frontend#%E5%8A%9F%E8%83%BD%E6%9E%B6%E6%A7%8B)
- [Features](https://github.com/yichennnn36/Sowing/tree/main/frontend#features)
- [專案架構](https://github.com/yichennnn36/Sowing/tree/main/frontend#%E5%B0%88%E6%A1%88%E6%9E%B6%E6%A7%8B)
- [Backend](https://github.com/yichennnn36/Sowing/tree/main/frontend#backend)
- [License](https://github.com/yichennnn36/Sowing/tree/main/frontend#license)

## Demo

![site-intro](https://user-images.githubusercontent.com/82022020/141728638-c8730f3f-4815-497f-81d2-c6fff28662b0.gif)

專案網站： [Sowing](https://yichennnn36.github.io/Sowing/)

 - Test User：sowing01
 - Password：sowing01

## Technologies

- Frontend
  - React
    - React hook
    - React Redux Toolkit
    - React Router
    - React DnD
    - PropTypes
  - Styled-components
  - Ant Design
  - Responsive Web Design(RWD)
  - Single Page Application(SPA)
  - Version Control: Git, GitHub
  - Package Manger: NPM
- Backend
  - Nodejs
  - AWS APIGateway
  - AWS Lambda
  - serverless
  - MySQL

## 功能架構

 - 登入註冊功能
 - 使用者
   - 新增、刪除、編輯、顯示旅行票卡
   - 拖曳更改狀態、分類過濾顯示
   - 個人化排序時間軸
   - 搜尋旅行票卡
   - 圖形化行程分布

<img width="3458" alt="framework" src="https://user-images.githubusercontent.com/82022020/142141903-48bcc672-e20b-4de6-8897-e4e3d96d5c78.png">

## Features

### Board - 新增旅行票卡

![sowing-add](https://user-images.githubusercontent.com/82022020/142139548-b7632225-6050-4166-a5bc-6ed9af615caa.gif)

### Board - 編輯旅行票卡

![sowing-edit](https://user-images.githubusercontent.com/82022020/142139560-92297358-2810-4349-862a-e5bebc6f3f6c.gif)

### Board - 刪除旅行票卡

![sowing-delete](https://user-images.githubusercontent.com/82022020/142139571-12b0fe36-aa42-4e15-931e-dd25b10db462.gif)

### Board - Drag & Drop

![sowing-dragdrop](https://user-images.githubusercontent.com/82022020/142139574-ed66087d-eb7a-4bc7-a134-cd884c45c0f1.gif)

### Board - 分類按鈕、搜尋功能

![sowinf-filter](https://user-images.githubusercontent.com/82022020/142141682-c46888b7-c618-444c-9bad-bec84e7a4871.gif)

### Time - 旅行紀錄時間軸、搜尋功能

![sowing-time](https://user-images.githubusercontent.com/82022020/142141698-faacfb95-7fb9-4583-8106-cf0beca2dad6.gif)

### Map - 旅行地點分布圖、以地區分類的旅行票卡

![sowing-map](https://user-images.githubusercontent.com/82022020/142141713-b283af64-f591-4b92-bab1-5bd2676b64a0.gif)

## 專案架構

```
frontend
├── .env                       # 環境變數存放處                   
├── .gitignore
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

[MIT](https://choosealicense.com/licenses/mit/)
