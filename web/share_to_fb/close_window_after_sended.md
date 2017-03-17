## 送出後關閉視窗方式

1. 送出後導到自己的網頁，網址後端加上 `#close_window`

2. 網頁裡塞這段程式碼：

```
if(window.location.hash.match('close_window'))window.close();
```

[參考資料](http://stackoverflow.com/questions/15180676/how-do-i-close-the-popup-after-i-post-to-facebook)
