# vue挂载函数mount的过程笔记

- $mount  
- 先缓存mount方法，然后根据vue的版本是runtime only版本还是runtime+compiler版本， 判断el挂载元素并且判断是否有render函数。如果没有的话，template转成render函数 
- 拿到render函数之后会调用mount方法 
- 在mount函数中调用mountComponent方法 
- 调用updateComponent方法 
- updateComponent中又调用了_update的私有方法 
- 在_update中又通过获取vm上的options来获得render函数，之后调用createElement方法来获取一个vnode 
- \_update私有方法中调用__patch__ 方法(待续。。。)