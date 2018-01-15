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


// //选择排序
const selectSort = (arr) => {

    let minIndex;
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
    let preIndex, current;
    if (Array.isArray(arr)) {
        
        for(let i = 1 ; i < arr.length; i++) {

            preIndex = i -1;
            current = arr[i];

            while(preIndex >= 0 && arr[preIndex] > current) {

                arr[preIndex+1] = arr[preIndex];
                preIndex--; 
            }

            arr[preIndex + 1] = current;
        }

        return arr;
    }
};

//归并排序
const mergeSort = (arr) => {

    if(!Array.isArray(arr)){

        return;
    }

    let len = arr.length;
    if(len < 2){
        
        return;
    }

    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {

    let result = [];

    while(left.length && right.length){

        if(left[0] <= right[0]){

            result.push(left.shift());
        }else{

            result.push(right.shift());
        }
    }

    while(left.length){

        result.push(left.shift());
    }

    while(right.length){

        result.push(right.shift());
    }

    return result;

};


//快速排序
const quickSort = (arr) => {

    if(!Array.isArray(arr)){

        return;
    }

    if ( arr.length == 0) {
        return [];
    }

    let left = [];
    let right = [];
    let pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push( arr[i] );
        } else {
            right.push( arr[i] );
        }
    }

    return quickSort( left ).concat( pivot, quickSort( right ));
};


// 计数排序
const countSort = (arr, maxValue) => {
    let bucket = new Array(maxValue+1),
        sortedIndex = 0,
        arrLen = arr.length,
        bucketArrLen = maxValue + 1;
    
    for (let i = 0; i < arrLen; i++){
        if(!bucket[arr[i]]){
            bucket[arr[i]] = 0;
        }

        bucket[arr[i]]++;
    }

    for (let j = 0; j < bucketArrLen; j++) {
        while(bucket[j] > 0){

            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
};

// 二分查找
const binarySearch = (arr, item) => {

    let end = data.length - 1;
    let start = 0;
    let m = Math.floor((start + end) / 2);

    if (item === data[m]) {
        return m;
    } else if (item < data[m]) {
        return binarySearch(data, item); //递归调用
    } else {
        return binarySearch(data, item);
    }
    return false;
};
