new 的时候发生了什么

构造函数的运行方式是以 new 的方式被运行，内部的this 运态指向实例化后的this

空对象？ 开始时
之后普， 拿到了构造函数里定义的属性
最后又拿到prototype上定义的属性和方法

对象？ 由属性和方法构成
1. 实例化一个新的对象，并且是这外类的实例
2. 构造函数被执行， this指向实例，
constructor 运行慢半拍在面向对象里构造函数是为他人服务的， 为this服务， this 由函数运行方式决定

this -> 实例 new
this -> 任何对象 call
3. Otaku.prototype 值是对象
原型对象
任何函数都仍有一个prototype 属性 才能构建类火车 constructor 车头，
车头上勾着车身        