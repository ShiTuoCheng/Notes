### EVENT LOOP

>setTimeout(() => {</br>&nbsp; console.log(1);</br>&nbsp;
  setTimeout(() => console.log(2), 0);</br>&nbsp; }, 500);</br>setTimeout(() => {</br>&nbsp; setTimeout(() => console.log(3), 500);</br>
}, 250);</br>
console.log(4);

###### 以上代码最终会依次打印出4, 1, 2, 3。</br>1.首先javascript会先执行整体代码。这是第一次循环。console.log(4)为整体代码所以先打印出来4。并将两个settimeout中的回调放入macrotask中。</br>2.之后javascript会循环任务队列中的微任务(Micro-task)。而settimeout的回掉属于macrotask，会在下一个event loop中执行。所以本次第二轮回调并没有代码执行。</br>3.接下来的第三次循环，会执行任务队列中的宏任务(Macrotask)所以本轮会打印出1.并且分别将带有console.log(2)和console.log(3)的setTimeout放到macrotask中等待下下次的执行。</br>4.第五次循环为macro-task（这里跳过了第四次循环的micro-task）执行第三次放入任务队列中的任务，则会将将带有console.log(2)和console.log(3)的setTimeout的回调放入下下次macrotask中。</br>5.执行macro-task中的任务，分别打印出2，3。
