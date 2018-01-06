# -*- coding: utf-8 -*-

l = [3,2,1]

# 大小
def less(first, second):
    if first <= second:
        return True
    else:
        return False

# 是否有序
def is_sort(arr):
    if isinstance(arr, (list, tuple)):
        for i in (range(0, len(arr))):
            return True if less(arr[i], arr[i+1]) else False

# 交换
def swap(arr, i, j):
    if isinstance(arr, (list, tuple)):
        arr[i], arr[j] = arr[j], arr[i]

def bubble_sort(arr):

    if isinstance(arr, (list, tuple)):
        for i in (range(1, len(arr))):
            for j in (range(0, len(arr)-i)):
                if arr[j] > arr[j+1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]
        return arr
