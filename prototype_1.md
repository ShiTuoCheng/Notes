# 原型链题目解析
```js
function F () {};
Object.prototype.a = function() {
    console.log('a');
}
Function.prototype.b = function(){
    console.log('b');
}
var f = new F();

f.a();
f.b();

F.a();
F.b();
```

##答案：
```js
a
// 报错
a
b
```

## 个人解析 

### 首先先看一下new关键字的实现过程

```
 function _new(func) {
    const temp = {};
    // 将this指向传入的构造函数
    temp.__proto__ = func.prototype;
    // 把参数带到
    const result = func.apply(temp, [].slice.call(arguments, 1));
    return result
 }
```

### 再看一下实例对象，构造函数，Function和Object之间的原型链关系

![](https://user-images.githubusercontent.com/25027560/37870377-2bc8211a-3007-11e8-92a0-04fa96aabf13.png)


### 由上一部分关系，我们可以知道：
#### 1. 当我们试图访问实例f的属性a时，由于f实例上没有a属性，会通过`[[prototype]]`(也就是__proto__)，去f的原型上去寻找a属性，也就是F.prototype。但是F.protype上也没有属性a，则继续向上找，F.prototype.__proto__ = Object.prototype。最后在Object.prototype上找到了属性a。
#### 2.同理，我们试图访问属性b时，在Object.prototype上没有找到b属性继续向上爬，Object.prototype.__proto__ = null, 报错。
#### 3.同理，访问funtion F上的属性a, F.__proto__ = Function.prototype. 没有找到属性a，继续向上找，Function.prototype.__proto__ = Object.prototype 拿到属性a。
#### 4.同上，直接在Function.prototype上拿到属性b.
