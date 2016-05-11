---
title: line-height&vertical
date: 2016-05-11 15:02:41
tags: css
---
## line-height
[w3c标准](http://devdocs.io/css/line-height)

1. line-height确定line-box的高度
2. 同一行内，各line元素的line-height共同确定该行的line-boxes的高度
3. block元素没有定高度，由block元素内的block元素和inline元素共同确定该元素的高度。
```javascript
<div style="line-height:1.5; border:1px solid #34538b;font-size: 16px;">
    <span style="font-size:60px; border:1px solid #a0b3d6; vertical-align: baseline; line-height: 100px;">大大的文字</span>
    后面是静止的文字。
</div>
```

## vertical-align
[w3c标准](http://devdocs.io/css/vertical-align)


## vertical-algin & line-height
[w3c标准](http://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/)
