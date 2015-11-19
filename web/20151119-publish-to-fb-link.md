
在 flyingV 贊助專案完之後，會跑出一個分享到臉書的按鈕，貼上去還幫你寫好裡面的訊息了，想要嗎 ?

![](https://dl.dropboxusercontent.com/u/6217074/webimg/201511/sharetofbexample.png)

網址填入這個，就可以看到結果 : 
```
https://www.facebook.com/dialog/feed?app_id=341297479252605&link=http://www.flyingv.cc/project/4436&picture=https://d15ds55abggjxg.cloudfront.net/project/28b8acab8e00ab38bf0112a843ea5911.jpg&name=Shu-huai贊助了FlyingV案件：「市長，給問嗎？」前進大台中！&caption=非常感謝Shu-huai盡了一份心力，就讓我們一起來共襄盛舉吧！&description=「市長，給問嗎」是一個市民與候選人直接對話的平台。民眾可以在平台上對候選人提問，候選人則必須公開回應人民的心聲。「市長，給問嗎 x 台北」，連勝文、柯文哲、馮光遠，都已經在平台上回答市民提問。現在，我們計畫要前進台中囉！&redirect_uri=http://www.flyingv.cc/project/4436
```

有幾個變數 : 

- app_id : 你要啟用一個 appid ，裡面的 domain 要寫對喔
- link : 分享出去的連結
- name : 標題
- caption : 下方內文
- picture : 顯示出來的圖片
- redirect_uri : 使用者按按下![](https://dl.dropboxusercontent.com/u/6217074/webimg/201511/sharebutton.png)之後，要轉到哪一頁

要注意，如果分享或 redirect_uri 的網址中有 "&" 的，要轉成 %26 喔。
