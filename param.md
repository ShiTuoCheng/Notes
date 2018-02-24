#### 一道考察js按值传递参数总结加笔记

##### 原题如下：

```js
(function() {
  var foo = 'x';

  (function (foo) {
    foo = 'y';
  })(foo);

  return foo;
})();
```

##### 结果应该返回为'x'。
##### 但是当时非常不解，为什么foo没有被修改为'y'。还在segmentfault发了一篇求助帖[（点我）](https://segmentfault.com/q/1010000013340600)。后来才明白，javascript语言中的函数参数都是按值来传递的。

### 什么叫按值传递？

##### 下面举个例子

```js
var test = 10;

function test2(test){ 
	++test;
}

console.log(test) // 还是10
```

##### 我们可以看到在函数内确实改了test的值，但是对外部的test的值并没有修改。
> 借用JavaScript高程上的话来讲：按值传递(call by value)是最常用的求值策略：函数的形参是被调用时所传实参的副本。修改形参的值并不会影响实参。

##### 但是如果遇到引用类型，则会在修改行参的同时，改变原始值。再举个例子：
```js
var obj = {x : 1};
function foo(o) {
    o.x = 3;
}
foo(obj);
console.log(obj.x); // 3, 被修改了!
```
> 按引用传递(call by reference)时，函数的形参接收实参的隐式引用，而不再是副本。这意味着函数形参的值如果被修改，实参也会被修改。同时两者指向相同的值。

### 但是根据《JavaScript高级程序设计》第66页上的话说：“ECMAScript中的所有参数传递的都是值，不可能通过引用传递参数。” 又是怎么回事呢？

#### 以下是结合 我的理解+[(这个boy的博客及评论)](https://github.com/mqyqingfeng/Blog/issues/10):

##### 第一个例子:
```js
var value = 1;
function foo(v) {
    v = 2;
    console.log(v); //2
}
foo(value);
console.log(value) // 1
```
##### 首先foo(v)中的v确实复制了外部的value。然后将v指向栈内存中的2，所以只修改了foo内部的v的值。而外部的value却没有改变。
##### 改变前：
|栈内存  |  堆内存  |
| --------   | -----:   | :----: |
| value : 1  |  |
| v : 1       |   |
##### 改变后：
|栈内存  |  堆内存  |
| --------   | -----:   | :----: |
| value : 1  |  |
| v : 2       |   |

##### 第二个例子:
```js
var obj = {
    value: 1
};
function foo(o) {
    o.value = 2;
    console.log(o.value); //2
}
foo(obj);
console.log(obj.value) // 2
```
##### 首先foo(o)中复制了外部obj的值。然后将o.value改为2，由于o还是引用着外部的obj对象，所以相当于是改变了原来的指向值 { value: 1 }，变成了{ value: 2 }，所以obj的引用指向最后的更新值 { value: 2 }。

##### 第三个例子：
```js
var obj = {
    value: 1
};
function foo(o) {
    o = 2;
    console.log(o); //2
}
foo(obj);
console.log(obj.value) // 1
```
##### 变量obj引用指向值 { value: 1 }，foo 执行时形参对实参做一次复制使得形参o引用也是指向值 { value: 1 }，这里注意o并不是指向obj；接着执行o = 2，相当于更新了o的引用，使o引用指向常量2，但是其实我们并没有改变原来的指向值 { value: 1 }，所以obj的引用指向值是没有变的。
