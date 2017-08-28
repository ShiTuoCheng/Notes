####原题目来自：[javascript-quiz](https://github.com/everget/javascript-quiz) 
######（1）
>var x = 1;</br>{</br>&nbsp; &nbsp;var x = 2;</br>}</br>x;

######首先javascript没有块作用域，所以上面代码可以视为全部在window下运行 所以以上代码如下运行顺序如下:</br>var x = undefined;</br>x = 1; </br> x = 2; // 这里直接覆盖之前的值 防止变为undefined</br>// 最后本题结果就是2.

######（2）
>if (!('y' in window))</br>{</br>&nbsp; var y = 1;</br>}
></br>console.log(y);
>

######首先我认为这道题考查的是变量提升，javascript首先对整个代码进行预解析，function和var声明会被提前，所以上面代码就变成了一下顺序：</br>var y = undefined; </br>if (!('y' in window)){</br>&nbsp; y = 1; </br>}<br>可以看到var声明会被提到全局上面，所以永远也不会进入到if之内。因此本题为undefined。

######（3）
