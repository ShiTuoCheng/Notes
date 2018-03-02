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
