function New (func) {

    var temp = {};
    var res;

    if(func.prototype !== null){
        temp.__proto__ = func.prototype;
    }

    res = func.apply(temp, Array.prototype.slice.call(arguments, 1));

    if ((typeof res === "object" || typeof res === "function") && res !== null) {
        return res;
    }

    return res;
}
