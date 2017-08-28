#### 原题目来自：[javascript-quiz](https://github.com/everget/javascript-quiz) 
###### （1）
> var x = 1;</br>{</br>&nbsp; &nbsp;var x = 2;</br>}</br>x;

###### 首先javascript没有块作用域，所以上面代码可以视为全部在window下运行 所以以上代码如下运行顺序如下:</br>var x = undefined;</br>x = 1; </br> x = 2; // 这里直接覆盖之前的值 防止变为undefined</br>// 最后本题结果就是2.

###### （2）
> if (!('y' in window))</br>{</br>&nbsp; var y = 1;</br>}
> </br>console.log(y);
>

###### 首先我认为这道题考查的是变量提升，javascript首先对整个代码进行预解析，function和var声明会被提前，所以上面代码就变成了一下顺序：</br>var y = undefined; </br>if (!('y' in window)){</br>&nbsp; y = 1; </br>}<br>可以看到var声明会被提到全局上面，所以永远也不会进入到if之内。因此本题为undefined。

###### （3）
>(function() {</br>&nbsp; var x = y = 3;</br>})();</br>
>console.log([typeof x, typeof y]);
>

###### 这道题会打印出：['undefined', 'number'];首先本题为一个自执行函数IIFE，有自己的一个函数作用域，外部无法访问内部的变量但是其内部可以访问到全局变量。之后就好说了，var x = y =3;相当于声明了一个局部变量x和一个全局变量y。所以x在全局当然不能被访问到所以为undefined，反而y能被访问到。

###### （4）
>var foo = function bar() {</br>&nbsp; return 'bar';</br>}</br>console.log(typeof bar());
>

###### 运行以上代码则会报错。原因我认为首先是将foo赋予了一个匿名函数。而右边的匿名函数bar已经变成了匿名函数的一部分无法被访问到，所以当我们尝试运行bar()的时候，当然会抛出bar没有定义的错误。但如果我们改动一下:console.log(typeof foo());则会正确运行右边匿名函数并打印出返回值的类型。

###### （5）
>x = 1;</br>(() => {</br>&nbsp; return x;</br>&nbsp; var x = 2;</br>
})();</br>console.log(x);
