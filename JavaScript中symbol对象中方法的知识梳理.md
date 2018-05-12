## JavaScript中symbol对象中方法的知识梳理

### 1.Symbol.hasInstance

> 每一个函数都有一个Symbol.hasInstance, 用于确定某个对象是否为该函数的事例。该方法在Function.prototype中定义，所以所有的函数都有该方法。而且为了确保该方法不会被意外重写，该方法writable：false， enumerable： false， configurable： false。

> 本质上就是es6 将 instanceof重新定义为Symbol.hasInstance的简单语法。

`obj instanceof Array`
 
> 等价于
 
`Array[Symbol.hasInstance](obj)`
 
> mdn上说：
 
> Symbol.hasInstance 用于判断某对象是否为某构造器的实例。 因此你可以用它自定义 instanceof 操作符在某个类上的行为。
 
#### 我的理解是 Symbol.hasinstance 为用户提供了可以为自己实现的某个类重新定义instanceof的判断逻辑以及运行方式了。

#### 那么问题来了instanceof原来的默认执行逻辑 是什么样的呢？ 此处参考了[这个boy的博客](https://github.com/amandakelake/blog/issues/36)

> instanceof 在mdn中的定义为

`object instanceof constructor`

>左边是要测试的对象，右边是构造函数
是否能在对象的原型链上（顺着__proto__一直往上找）找到构造函数的原型属性（[constructor].prototype）。

#### 举个例子

`[] instanceof Array // true`

`[] instanceof Object //true`

##### 第一个很容易
`[].__proto__ = Array.prototype`

#####  第二个
`[].__proto__ = Array.prototype; // 没有找到的话，继续向原型链上找 直到找不到为止`
`Array.prototype.__proto = Object.prototype`

#### 再来一个
`Function instanceof Object`
`Object instanceof Object`
`Object instanceof Function`

##### 第一个
`Function.__proto__ = Function.prototype 没有找到的话，继续向原型链上找 直到找不到为止`
`Function.prototype.__proto__ = Object.prototype`

##### 第二个
`Object.__proto__ = Function.prototype`
`Function.prototype.__proto__ = Object.prototype`

### 2. Symbol.toPrimitive

> mdn上说：

> Symbol.toPrimitive 指将被调用的指定函数值的属性转换为相对应的原始值。

#### 我的理解是es6 新增加的Symbol.toPrimitive方法，可以覆盖掉原来的toPrimitive逻辑，还可以进行自定义。

#### 比如我可以:

```js
function test(foo){
	this.foo = foo;
}

test.prototype[Symbol.toPrimitive] = (hint) => {
	console.log(hint) // 三种值类型：number string default
}
```

#### 所以原来的toPrimitive的逻辑是什么样的呢

> 引用mdn的JS::ToPrimitive

>bool
JS::ToPrimitive(JSContext *cx, JS::HandleObject obj, JSType hint,
                JS::MutableHandleValue vp);
                
> 引用msdn上的ToPrimitive ( input [, PreferredType] )

#### 也就是说
#### 可选参数PreferredType可以是Number或者String,它只代表了一个转换的偏好,转换结果不一定必须是这个参数所指的类型,但转换结果一定是一个原始值.如果PreferredType被标志为Number,则会进行下面的操作来转换输入的值:

##### 1.如果输入的值已经是个原始值,则直接返回它.
##### 2.否则,如果输入的值是一个对象.则调用该对象的valueOf()方法.如果valueOf()方法的返回值是一个原始值,则返回这个原始值.
##### 3.否则,调用这个对象的toString()方法.如果toString()方法的返回值是一个原始值,则返回这个原始值.否则,抛出TypeError异常.
##### 4.如果PreferredType被标志为String,则转换操作的第二步和第三步的顺序会调换.如果没有PreferredType这个参数,则PreferredType的值会按照这样的规则来自动设置




 
 
