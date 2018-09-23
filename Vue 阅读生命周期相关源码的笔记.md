# Vue 阅读生命周期相关源码的笔记

```js
export function callHook (vm: Component, hook: string) {
  pushTarget()
  const handlers = vm.$options[hook]
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm)
      } catch (e) {
        handleError(e, vm, `${hook} hook`)
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  popTarget()
}
```
## 1.生命周期回调钩子函数callHook,定义在了core/instance/lifcycle.js文件当中。

### callHook函数中的handlers其实就是一个包含生命周期钩子函数的数组。通过遍历数组来将vm传入来执行。所以这时候在生命周期钩子中就能够通过this来获取到当前的vm实例。

## 2.beforeCreate和created

### 在core/instance/init.js中的initMixin的初始化混入函数的_init()中
```js
	initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')
```
### 由此我们可以看到，在beforeCreate生命周期钩子中，我们是拿不到data和props的。因为我们初始化data和props是在initState中执行的。所以反之，我们在created中是可以拿到data和props的。

## 3.beforeMounted和mounted

### 同样在core/instance/lifecycle.js中的mountComponent方法。这个函数在$mount函数执行挂载函数的时候执行。也就是说，在beforeMounted是挂载之前的回调函数。而mounted函数是有两个地方来调用的。

```js
if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
```

### 一个就是当挂载元素是根结点的时候，直接会调用mounted的生命钩子。
### 还有一个地方，当子组件进行patch方法的时候，调用invokeInsertHook函数

```
  function invokeInsertHook (vnode, queue, initial) {
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue
    } else {
      for (let i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i])
      }
    }
  }
```

### 这个方法不断遍历插入到队列里面的vnode队列。每一个queue[i]是一个组件，而insert方法就是每一个字组件的钩子函数。具体定义是在core/vdom/create-component.js中。
```
insert (vnode: MountedComponentVNode) {
    const { context, componentInstance } = vnode
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true
      callHook(componentInstance, 'mounted')
    }
  },
```



