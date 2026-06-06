# 東北・東京 九日 ― 我們的旅程

媽媽與我的 2026 初夏旅行遊記（仙台 → 福島 → 東京）。單一靜態網頁，中／日雙語、行程時間軸、費用帳本，照片以 base64 內嵌，無外部相依。

🌐 線上版：https://mom.linkstart3c.com.tw

## 檔案

| 路徑 | 說明 |
| --- | --- |
| `index.html` | 上架版本（最新，含內嵌照片） |
| `CNAME` | GitHub Pages 自訂網域設定 |
| `versions/v1-single-language.html` | 第一版：純中文、時間軸 |
| `versions/v2-bilingual-ledger.html` | 第二版：中／日雙語、費用帳本 |
| `versions/v3-with-photos.html` | 第三版：加入內嵌照片（＝ `index.html`） |

## 上架方式（GitHub Pages）

1. repo **Settings → Pages → Build and deployment → Source** 選 **Deploy from a branch**，
   branch 選擇本分支合併後的預設分支（如 `main`），資料夾 `/ (root)`。
2. Pages 會讀取 `CNAME`，自訂網域自動填入 `mom.linkstart3c.com.tw`。
3. 在 `linkstart3c.com.tw` 的 DNS 管理處新增一筆紀錄：

   ```
   類型: CNAME
   主機/名稱: mom
   值/指向: holoyoyi.github.io
   TTL: 自動／3600
   ```

4. DNS 生效後（數分鐘～數小時），回 Pages 設定勾選 **Enforce HTTPS**。

完成後 https://mom.linkstart3c.com.tw 即可瀏覽。
