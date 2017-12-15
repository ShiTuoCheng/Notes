// 截流函数
/*jshint esversion: 6 */

// 使用时间戳
function throttle(fun, await){

    var context, args, previous = 0; // 初始化之前的事件做对比
    return function() {

        var date = new Data().getTime();
        context = this;
        args = arguments;

        if(date - previous > await){
            fun.apply(context, args);
            previous = date;
        }
    };
}

// 使用定时器来实现
function throttle(fun, await) {
    var timer = null;

    return function() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fun();
        }, await);
    };
}
