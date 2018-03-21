// 闭包
function F1() {
  var a = 100;
  return function() {
    console.log(a);
  };
}
function F2(f1) {
  var a = 200;
  console.log(f1());
}
var f1 = F1();
F2(f1);

/**
 * 
 * globalContext = {
 *  VO: {
 *    F1: function(){},
 *    F2: function(){}
 *  },
 *  scope: [globalContext.VO],
 *  this: globalContext.VO
 * }
 * 
 * ESstack = [globalContext];
 * 
 * 执行F1();
 * 
 * ESstack = [globalContext, F1Context];
 * 
 * 创建F1执行上下文
 * F1Context = {
 *  VO: {
 *    a:undefined
 *  },
 *  scope:[F1Context, globalContext],
 *  this: F1Context
 * }
 * 
 * 执行f1执行上下文
 * F1Context = {
 *  AO: {
 *    a:10
 *  },
 *  scope: [F1Context, globalContext],
 *  this: F1Context
 * }
 * 
 * 执行完毕执行上下文栈中弹出F1Context(虽然F1的执行上下文被销毁了，但是由于作用域链还在，还是能访问到f1上下文内的变量。这就是闭包).
 * ESstack = [globalContext];
 * 
 * 执行F2函数
 * ESstack = [globalContext, F2Context];
 * 
 * F2Context = {
 *  AO:{
 *    a: 200
 *  }
 *  scope: [F2Context, globalContext],
 *  this: F2Context
 * }
 * 
 * 此刻console.log(f1())；
 * f1内部没有a变量，会顺着作用域链往上爬，在F1中找到变量a打印
 * 
 * 
 */
