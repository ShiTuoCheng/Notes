/* jshint esversion :6 */
// 交换函数
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// 从 index 开始检查并保持最大堆性质
const isMaxHeap = (array, index, heapSize) => {
    let maxIndex = index,
        leftIndex = 2 * index + 1,
        rightIndex = 2 * (index + 1);

    if(leftIndex < heapSize && array[index] < array[leftIndex]){

        maxIndex = leftIndex;
    }

    if(rightIndex < heapSize && array[index] < array[rightIndex]){

        maxIndex = rightIndex;
    }

    if(maxIndex !== index) {
        swap(array, maxIndex, index);
        isMaxHeap(array, maxIndex, heapSize);
    }
};
// 建立最大立顶堆
const buildMaxHeap = (array, heapSize) => {

    let i,
        iParent = Math.floor((heapSize - 1)/2);
    
    for(i = iParent; i >= 0; i--){
        isMaxHeap(array, i, heapSize);
    }
};
