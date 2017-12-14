 >function fun(n, o) {<br>
 &nbsp;console.log(o);<br>
 &nbsp;return {<br>
 &nbsp;&nbsp;&nbsp;fun: function(m) {<br>
 &nbsp;&nbsp;&nbsp;&nbsp;return fun(m, n);<br>
 &nbsp;&nbsp;&nbsp;}<br>
 &nbsp;}<br>
}<br>
fun(0).fun(1).fun(2);<br>
let fn = fun(0).fun(1).fun;<br>
fn(2);<br>
fn(3);<br>

### 运行结果为
 >undefined
0
1
undefined
0
1
1

##### 1.fun(0)时，第一个参数为n=0，所以console.log为undefined。同时返回
 >fun: function(m) {<br>
 &nbsp;&nbsp;return fun(m, 0);<br>
 }
 
##### 2.执行fun(0).fun(1)时，则m=1, 函数为fun(1,0),所以console.log(0),同时返回
  >fun: function(m) {<br>
 &nbsp;&nbsp;return fun(m, 0);<br>
 }
 
##### 3.执行fun(0).fun(1).fun(2)时，则m=2, 函数为fun(2,1),所以console.log(1),同时返回
 >fun: function(m) {<br>
 &nbsp;&nbsp;return fun(m, 0);<br>
 }
