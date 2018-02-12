var result = new Array();
for(var i = 0; i < 10; i++){
    //此处每个值都是10 
    result[i] = function() {
        return i;
    };
}

result[0](); //怎么着都是10

// 下面以执行上下文和作用域分析闭包的作用

//首先以ESStack表示js执行上下文栈
/*
    ESstack = [];
    首先压入一个全局执行上下文栈:
    ESstack = [globalContext],
    此时执行全局上下文：
    globalContext = {

        vo: {
            global, 
            result = [...],
            i = 10
        },
        scope: [globalContext.VO],
        this: globalContext.VO
    }

    当执行到result[0]Context的时候，压入result[0]Context的上下文，
    ESstack = [globalContext, result[0]Context];

    result[0]Context = {
        AO: {},
        scope: [result[0]Context.A0, globalContext.VO],
        this: 
    }

    这时，没有i值result[0]就会顺着作用域连去找i值，而这时候全局的i已经变成了10。
*/

// 都知道将内部函数写成闭包就可解决本题，但是原理是什么

var result = [];

for(var i = 0; i < 10; i++){

    result[i] = (function(){
        console.log(i);
    })(i);
}

/*
    当执行到 
    result[0] = (function(){
        console.log(0)
    });
    时，分析执行上下文。

    同上，这时的全局上下文为
    globalContext = {

        vo: {
            global,
            result = [...],
            i = 10
        },
        scope: [globalContext.VO],
        this: globalContext.VO
    }

    result[0]context = {
        AO: {},
        scope: [result[0]context.AO, 匿名函数.AO, globalContext],
        this: 
    }
    result[0]找不到变量i，会根据作用域链向上级去查找，下面来分析一下匿名函数的活动变量。

    匿名函数Context = {

        AO: {
            i = 0
        }
    }

    在匿名函数的AO上找到了，问题解决
*/
