### [Javascript quiz](http://perfectionkills.com/javascript-quiz/) 题目个人解析

```js
(function(){
  return typeof arguments;
})();
```
##### 首先typeof只会返回原始类型，对于引用类型都会返回object。arguments是类数组对象。虽然可以用es6的扩展运算符或者Array.from()转成数组对象，但是本质上还是object。所以这个会返回object。

```js
var f = function g(){ return 23; };
typeof g();
```

##### 首先f就是一个函数表达式，不是个函数声明，所以只能在function g(){ return 23; };里面捕获到g的变量。在外部调用肯定会找不到，所以会出错。
##### 但为什么不是 "undefined"？
##### 这里如果求 typeof g ，会返回 undefined，但求的是 g()，所以会去先去调用函数 g，这里就会直接抛出异常，所以是 Error。

```js
(function(x){
	delete x;
	return x;
})(1);
```

##### 首先，非严格模式下使用delete，总是不会报错；然后，delete在函数内部无法删除传入的参数。所以在全局没有用var来声明变脸的话，其实是在给window或者global增加了一个属性，属性赋值，所以delete可以删掉。这里是不会删掉参数，所以返回x=1。

```js
var y = 1, x = y = typeof x;
x;
```

##### 首先执行上下文创建的时候只会扫描var声明的变量提升到作用域顶部然后赋值为undefined。具体实现参考之前的文章[点我即可](https://github.com/ShiTuoCheng/Notes/blob/master/execution.md)所以题目中的代码经过变量提升后就会变为：
```js
var y,x;
y = 1;
y = typeof x;
x = y;
x;
```
##### 所以x为"undefined"

```js
(function f(f){
  return typeof f();
})(function(){ return 1; });
```
##### 首先是将函数声明function(){ return 1; }当作iife的参数传入。typeof f()相当于执行传入函数 所以返回1 typeof 1 结果为number。

```js
var foo = {
  bar: function() { return this.baz; },
  baz: 1
};
(function(){
  return typeof arguments[0]();
})(foo.bar); 
```

##### 翻译一下以上语句
```js
typeof arguments[0]();
```
##### 相当于
```js
(function() { return this.baz; })();
```
##### 所以这时的this指的是window或者global。所以在全局找不到baz属性
### this绑定规则：
> 1.函数是否是new调用（new绑定）？若是，则this指向新对象
> 
> 2.函数是否是bind方法返回的（硬绑定）？若是，则this指向指定对象。
> 
> 3.函数是否通过apply/call调用（硬绑定）？若是，则this指向指定对象。
>
> 4.是否作为对象的方法调用（隐式绑定）？若是，则this指向该对象
>
> 5.this指向全局

```js

  var foo = {
    bar: function(){ return this.baz; },
    baz: 1
  }
  typeof (f = foo.bar)();
```
##### 解析同上，这里不说了。

```js
var f = (function f(){ return "1"; }, function g(){ return 2; })();
typeof f;
```
##### js符号优先级，所以总是返回最后一项 number；

```js
var x = 1;
if (function f(){}) {
	x += typeof f;
}
x;
```
##### function f(){}加了括号就变成了函数表达式。函数表达式的名字只能函数内部可见。所以这里x 为1undefined。

```js
var x = [typeof x, typeof y][1];
typeof typeof x;
```
##### var x = typeof y; x = 'undefined'; typeof typeof 'undefined';
##### 所以这里输出string。
```js
(function(foo){
	return typeof foo.bar;
})({ foo: { bar: 1 } });
```
