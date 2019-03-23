# BFC 是一个什么概念
Block Formatting Context （块级格式化上下文）

#BFC 原理 （渲染规则）
1. 正常的文档流会存在边距折叠的问题 （父子容器 兄弟容器的边距折叠），水平方向的外边距不存在折叠的情况 （因为水平方向不存在块级元素）但凡是块级元素一定会占满一行
2. BFC容器不会与浮动元素的box重叠
3. BFC在页面上是一个独立的容器， 最显著的效果就是建立一个隔离的空间，外面的元素不会影响容器里面的元素，反之，里面的元素也不会影响容器外面的元素
浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）。
4. 计算BFC容器高度时，浮动元素也会参与高度的计算 （也是通常清楚浮动的原理）

# 创建BFC独立布局环境
1、float的值不是none。
2、position的值不是static或者relative。
3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4、overflow的值不是visible


1、display: table 可能引发响应性问题
2、overflow: scroll 可能产生多余的滚动条
3、float: left 将把元素移至左侧，并被其他元素环绕
4、overflow: hidden 将裁切溢出元素