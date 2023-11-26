# (12.5%) 網頁程式設計 期中上機考-2 -- 斷網

##### 2023-11-15, at B218

#### Note:

1. 請不要發揮同學愛，作弊雙方除了本次考試 0 分外，平常分數另扣 20 分。
2. 請繳交 w10_mid2_xx.md, w10_mid2_xx.pdf，還有所有程式壓縮檔 (mid2_xx.zip)。
3. 老師將題目提供在 w10_mid2_xx.md 檔案上，要實作的部分放在 w10_mid2_htc.pdf 上。
4. 每一張圖片要有左側機房背景，圖片標註要跟老師所標註的類似。違者會依情節扣分。
5. 請自評分數，將每一題的 ? 填入分數，沒有填者，不會批改，以 0 分計算。

Your (Name, ID): (name, id)

##### 請自評每題分數

- P1 (20%): ? 分
- P2 (30%): ? 分
- P3 (20%): ? 分
- P4 (15%): ? 分
- P5 (15%): ? 分

- 總分: ? 分

---

#### (20%) P1-1_xx: 請修改老師提供的 p1_xx.html 及 p1_xx.css，產生 8 張圖片，每行 4 張圖片，如下圖

![w10-p1.png](w10-p1.png)

---

#### (30%) P2_xx: 根據 P1_xx 題做響應式，斷點如下：

請先將 p1_xx.html, p1_xx.css 複製一份到 p2_xx.html, p2_xx.css

##### => <500px 每行 1 張圖片，請以 498px 測試，並截圖如下：

![w10-p2-1.png](w10-p2-1.png)

##### => 500px~700px 每行 2 張圖片，請以 600px 測試，並截圖如下：

![w10-p2-2.png](w10-p2-2.png)

##### => 700px~900px 每行 3 張圖片，請以 800px 測試，並截圖如下：

![w10-p2-3.png](w10-p2-3.png)

##### => 900px~1100px 每行 4 張圖片，請以 1000px 測試，並截圖如下：

![w10-p2-4.png](w10-p2-4.png)

##### => 1100px~1300px 每行 5 張圖片，請以 1200px 測試，並截圖如下：

![w10-p2-5.png](w10-p2-5.png)

##### => 1300px 以上 每行 6 張圖片，請以 1400px 測試，並截圖如下：

![w10-p2-6.png](w10-p2-6.png)

##### => 跟響應式有關的 css

![w10-p2-7.png](w10-p2-7.png)

---

#### (20%) P3_xx: 請根據老師所給的 p3_xx.html，原先是 6 張卡片，有三個色系，全部使用變數來控制顯示一致，

![w10-p3-1.png](w10-p3-1.png)

```
:root {
  --primary: #645cff;
  --primary-dark: #3c3799;
  --grey-light: #f1f5f9;
  --grey: #64748b;
  --grey-dark: #0f172a;
  --letter-spacing: 2px;
  --fluid-width: 90vw;
  --max-width: 1170px;
  --border-radius: 0.15rem;
  --card-1-color: #6f193c;
  --card-1-background: #ffe8f1;
  --card-1-border: 2px solid #ff69a6;
  --card-2-color: #1b3a6d;
  --card-2-background: #ecf4ff;
  --card-2-border: 2px solid #68a3ff;
  --card-3-color: rgb(64, 124, 64);
  --card-3-background: rgba(0, 255, 0, 0.1);
  --card-3-border: 2px solid rgb(35, 70, 35);
}
```

#### 請修改 p3_xx.html, 並設定 css grid，每一列顯示 4 張 cards，要顯示 8 張卡片 (photo-1.jpg ~ photo-8.jpg)，加入一個新的色系， rgb(161, 68, 238);，讓 8 張圖片以紅藍綠紫，紅藍綠紫方式呈現。新的色系背景(background-color) 及邊界(border)請用 rgba(161, 68, 238, ?)的方式來表示

##### => 本機端顯示

![w10-p3-2.png](w10-p3-2.png)

##### => 顯示第四個色系會用到的變數及相關的 css，請以多視窗顯示，截一張圖繳交

![w10-p3-3.png](w9-p3-3.png)

---

#### (15%) P4_xx: 請根據老師所給的 p4_xx.html，在 html 加入你的學號姓名，加入 css, js 程式，顯示選單如下圖，p4_xx.html 老師已給的部分，除非有必要，不能隨意修改(成跟上課 demo 的一樣)。

##### => P1_xx 題，瀏覽器結果

![w10-p4-1.png](w10-p4-1.png)

##### => P2_xx 題，瀏覽器結果

![w10-p4-2.png](w10-p4-2.png)

##### => P3_xx 題，瀏覽器結果

![w10-p4-3.png](w10-p4-3.png)

##### => p4_xx.js 截圖

![w10-p4-4.png](w10-p4-4.png)

##### => p4_xx.css 截圖 (放入兩個視窗，一張圖顯示)

![w10-p4-5.png](w10-p4-5.png)

---

#### (15%) P5: 請根據老師所給的 p5_xx.html, p5_xx.css, p5_xx.js 要將 class demo 中 W1-intro, W3-card 兩週 demo 的內容放入, 點選 W1-intro 時，跳至 W2-intro 畫面，點選 W3-card 時，跳至 W3-card 畫面。

要使用 navbar-fixed，讓選單固定在畫面上。一開始並沒有顯示固定選單，但畫面捲動下移 100px 時，會顯示固定選單。

本題主要考固定選單與跳頁，能顯示頁面如附圖即可, css 有些差異不必特別處理。

##### => 點選 W3-card，會顯示固定選單

![w10-p5-1.png](w10-p5-1.png)

##### => 點選 W1-intro，並將滑鼠移到最上方，看到 W1-intro 頁面，固定選單消失

![w10-p5-2.png](w10-p5-2.png)

##### => 顯示本題對應的 html (用多個視窗呈現，截一張圖)

![w10-p5-3.png](w10-p5-3.png)

##### => 顯示本題對應的 css (用多個視窗呈現，截一張圖)

![w10-p5-4.png](w10-p5-4.png)

##### => 顯示本題對應的 js (用多個視窗呈現，截一張圖)

![w10-p5-5.png](w10-p5-5.png)
