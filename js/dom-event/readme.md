dom event(事件)
- dom
onclick 事件注册只有一个 dom-0
addEventListener("click") 不限  dom-2
addEventListener("keyup") 不限 dom-3
- dom 事件流
 捕获 (capture)
 window -> document(documentElement) -> body -> 父级 -> 目标元素
 冒泡 (bubble)
 window <- document(documentElement) <- body <- 父级 <- 目标元素
 事件按照 dom流 的顺序执行我的事件回调 
 处于目标阶段的时候 事件调用顺序是取决于事件注册的顺序
- event
 event.stopImmediatePropagation();阻止后面注册的事件
 event.stopProgration() 阻止事件冒泡
 