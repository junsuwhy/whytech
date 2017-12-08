# 序言

目前還很少人用 webComponent 

# 簡介

## 為什麼要用 Polymer

Polymer 或稱 webComponent 是一個很新的 web 技術，它很像 react.js, Angular.js, Vue.js 這些時下很紅的框架，但又有點不一樣，它結合了最新瀏覽器共同訂立的一些新技術，包括 customElement, shadowDom 等等，使我們可以藉這個技術建立一些能在多網站、平台上呈現一致的模組。

## HelloWorld

# 用途

# 手把手寫一個 element

# 手把手寫一個 app

# 附註

## element 在 javascript 一些注意事項

### 如何取到 ShadowDOM 裡面的東西？

使用 Polymer.dom 可以取得 Dom 元件
假設 Item 是一個包含 ShadowDOM 的物件 
`Polymer.dom(Item)`和`Polymer.dom(Item.root)` 不一樣

`Polymer.dom(Item)` 會取到外部的東西，稱之為 **LightDOM**

`Polymer.dom(Item.root)` 會取到 template 的東西，稱為 **ShadowDOM**



1. 在  Polymer 建構式可以用的function：  https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements
	1. constructor 構築元件的，這時還不能用 this.$
	2. connectedCallback 
	3. attributeChangedCallback(attributeName, oldValue, newValue, namespace)




	1. 在 imported html  裡面的東西，怎麼取到它的 host 

假設有個 item  在一個 shadowRoot 裡面，它可以用 item.getRootNode() 取到它的第一個父層 shadowRoot，
但這時還不是 Polymer 元件，再取 item.getRootNode().host 才是 shadowRoot 外包的一層元件。



用了 on-click,  onmouseover 那麼久，覺得還是都不要用這些比較好 ，請直接用
Polymer.dom(this.root).querySelector('xxx-xxx').addEventListener('click',xxxfunc)
或是 
this.$.someItemm.addEventListener('click',xxxfunc)
如果是 dom-repeat, dom-if 這種動態加入的，不會加到 this.$ 裡面喔


## 在 Drupal 可以用的做法


> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjM1NjA2MjE2XX0=
-->