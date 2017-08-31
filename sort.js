/* jshint esversion: 6*/
// 插入排序
const arr = [5, 6, 3, 1, 8, 7, 2, 4];

//交换函数
const swap = (arr, firstIndex, secondIndex) => {

    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
};

//比较大小
const less = (first, second) => {

    if(first < second){

        return true;
    }else{

        return false;
    }
};

//是否有序
const isSorted = (arr) => {

    if(Array.isArray(arr)){

        for (let i=0; i < arr.length; i++){

            if(less(arr[i], arr[i-1])) return false;
        }

        return true;
    }
};

// 冒泡排序
const bubbleSort = (arr) => {

    if(Array.isArray(arr)){

        for(var i = 0; i < arr.length - 1; i++){
            for(var j = 0; j < arr.length - 1 - i; j++){

                if(arr[j] > arr[j+1]){

                    swap(arr, j, j+1);
                }
            }
        }
    }

    return arr;
};

//选择排序
const selectSort = (arr) => {

    let minIndex, temp;
    if(Array.isArray(arr)){

        for(let i = 0; i < arr.length - 1; i++){

            minIndex = i;

            for(let j = i + 1; j < arr.length; j++){

                if(arr[j] < arr[minIndex]){

                    minIndex = j;
                }
            }

            swap(arr, i, minIndex);
        }
    }

    return arr;
};

// 插入排序
const insertSort = (arr) => {

    if(!Array.isArray(arr)){
        return;
    }
    let preIndex, current;
    for(let i = 1; i < arr.length; i++){

        preIndex = i -1;
        current = arr[i];

        while(preIndex >= 0 && arr[preIndex] > current){

            arr[preIndex+1] = arr[preIndex]; 
            preIndex--;
        }

        arr[preIndex+1] = current;
    }

    return arr;
};

//shell排序
const shellSort = (arr) => {

    if(!Array.isArray(arr)){

        return;
    }


};
