/*jshint esversion:6*/

//js浅复制函数
const shallowCopy = (obj) => {

	if (typeof obj !== "object"){

		return;
	}
	
	let newObj;

	if (Object.prototype.toString.call(obj) === "[Object Array]") {

		newObj = [];

	}else{

		newObj = {};
		newObj.constructor = obj.constructor;
	}

	for(let eachProp in obj){

		if (obj.hasOwnProperty(eachProp)) {

			newObj[eachProp] = obj[eachProp];
		}
	}

	return newObj;
};

//js 深复制函数
const deepCopy = (obj) => {

	if(typeof obj !== "object"){

		return;
	}

	let newObj;

	if(Object.prototype.toString.call(obj) === "[Object Array]"){

		newObj = [];
	}else{

		newObj = {};
		newObj.constructor = obj.constructor;
	}

	for(let key in obj){
		if(obj.hasOwnProperty(key)){

			//递归实现深复制（判断是否为对象若为对象则递归实现深复制，若为基础类型则直接浅复制）
			if(typeof obj[key] === object){

				newObj[key] = deepCopy(obj[key]);
			}else{

				newObj[key] = obj[key];
			}
		}
	}
	
};
