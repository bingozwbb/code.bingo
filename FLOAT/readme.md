# 清除浮动有几种方法
1. 在父元素底部加一行代码 <div style="clear: both"></div>
2. 利用BFC简称为“块级格式化上下文”在父容器增加css 
div.content{overflow:hidden;  
             <!-- overflow: auto; 
             overflow: scroll; -->
           }内
3. 使用css中的after伪元素，给父元素div添加一个clearfix的类名 
    .clearfix:after {
        content: '.';
        display: block;
        clear: both;
    }   
4.  给父元素增加一行css
    .content{
        float: left;
    }  (不建议使用)    
5. 一个更优雅的改进 --尼古拉斯大师 方法
   把display设置为table，可以创建一个表格单元，这个匿名的表格单元可以直接触发BFC，
       .clearfix:after {
        content: '.';
        display: table;
        clear: both;
    }     