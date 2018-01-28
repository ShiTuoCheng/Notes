/*

*/

// 原型链继承
/* 缺点：
    1.引用类型值会被所有实例所共享
    2.在创建SubType的实例时，不能向SuperType传参。
*/
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType() {
    this.subProperty = false;
}

//继承SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
    return this.subProperty;
};


// 构造函数继承
/* 优点：
    1.避免了引用类型的属性被所有实例共享。
    2.可以在subtype中向supertype中传参。
   缺点：
    1.方法在构造函数中定义，每次创建实例都会创建一边方法
*/

function SuperType() {
    this.colors = ['black', 'red'];
}

function SubType() {
    SuperType.call(this);
}

// 组合继承
/*
    缺点：
      1.重复调用两次父类构造函数
*/
function SuperType(name) {
    this.name = name;
    this.colors = ['black', 'red'];
}

function SubType(name, age) {
    SuperType.call(this, name);//第一次
    this.age = age;
}

SubType.prototype = new SuperType(); //第二次
SubType.prototype.constructor = SubType;


// to-do
