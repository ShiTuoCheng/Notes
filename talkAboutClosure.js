
var result = new Array();
for(var i = 0; i < 10; i++){
    //此处每个值都是10 
    result[i] = function() {
        return i;
    };
}

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
