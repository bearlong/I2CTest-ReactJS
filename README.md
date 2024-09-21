# React Components Showcase

這個專案展示了三個 React 元件的實現，分別是倒數計時器、動態文章列表和可折疊內容區塊（Accordion）。每個元件都有其功能及使用說明。


## 1. CountdownTimer Component

### 描述
`CountdownTimer` 是一個倒數計時器元件，接收 `initialTime` 的 prop，表示倒數開始的秒數。每秒自動減少倒數時間，直到倒數結束為止。當倒數結束時，元件會停止更新倒數時間。此外，提供一個 "Reset" 按鈕，可以將倒數重置回初始時間。

### 使用方法
在 `pages/countdownTimer/index.js` 中引入並使用 `CountdownTimer` 元件。
`CountdownTimer` 元件 接收 `initialTime` 及 `isChanged` 判定開始倒數的秒數

## 2. PostList Component

### 描述
`PostList` 是一個使用 Next.js 實現的文章列表元件。它使用 `getStaticProps` 來取得假資料並將每篇文章的標題渲染出來。使用者點擊文章標題後，將透過 `next/link` 導航到對應的文章詳細頁面。

### 使用方法
在 `pages/postList/index.js` 中為 `PostList` 元件。
在 `pages/postList/[postID].js` 為詳細頁面動態路由。


## 3. Accordion Component

### 描述
`Accordion` 是一個可折疊內容區塊的元件，接收包含多個段落資料的 prop 。為每個段落生成一個標題和對應的內容，點擊標題時，該段落的內容會展開或折疊，且每個段落互不影響。可以傳遞一個 prop 來決定哪個段落預設展開。
3. Accordion Component
描述
Accordion 是一個可折疊內容區塊的元件，接收包含多個段落資料的 prop。為每個段落生成一個標題和對應的內容，點擊標題時，該段落的內容會展開或折疊，且每個段落互不影響。可以傳遞一個 prop 來決定哪個段落預設展開。

### 使用方法
在 `pages/accordion/index.js` 中引入並使用 `Accordion` 元件。
`Accordion` 元件 接收 `data` 及 `initSelect` 判定段落及預展開的文章

## 安裝與運行

1. 複製此專案到本地：
   git clone https://github.com/I2CTest-ReactJS.git
2. 進入專案目錄：
   cd I2CTest-ReactJS
3. 安裝依賴：
    npm i
4. 啟動開發伺服器：
    npm run dev
5. 在瀏覽器中訪問 http://localhost:3000 查看元件。