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

