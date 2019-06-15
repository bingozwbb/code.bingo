HTTP协议 req response
状态码:  HTTP响应(response)中包含状态码 
浏览器 代理 proxy
1xx   informational 信息性状态码 请求正在处理 
2xx success 成功状态码 请求已经被成功处理
200 ok
3xx redirection 重定向状态码 需要进行附加操作已完成请求
    301 永久跳转 moved permanently(用户 www.xiaomi.com -> www.mi.com)
    告诉蜘蛛 把记录更新 301 可以改变状态码 不变 来展示理解
    http://localhost:3000 301 永久跳转 再次访问 浏览器有缓存 不需要再走服务器

    302 临时跳转 不会告知蜘蛛 或在前端缓存
4xx client error 客户端错误状态码 （地址错） 未授权限 受限资源 服务器无法处理请求
5xx sever error 服务器错误状态码 服务器处理请求出错