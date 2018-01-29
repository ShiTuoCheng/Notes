#### 客户端存储笔记

##### 1.localStorage和sessionStorage
###### 两者的区别在于存储的有效期和作用域的不同：数据可以存储多长时间以及谁拥有数据的访问权。
###### localStorge存储的数据是永久性的，除非web应用可以删除存储的数据，否则永远不会过期。localstorage的作用域是限定在文档元document级别的，因此以下每个都拥有不同的文档元:<br>1.不同协议<br>2.不同主机名.<br>3.不同端口。<br>同源的文档间共享同样的localStorage数据。它们可以互相读区对方的数据，甚至可以覆盖对方的数据。但是，非同源的文档间互相都不读取或者覆盖对方的数据。<br>通过sessionStorage存储的数据和通过localStorage存储的数据的有效期也是不同：前者的有效期和存储数据的脚本所在的最顶层的窗口或者是浏览器标签也是一样的。一旦窗口或者标签页被永久关闭了，纳闷通过所有sessionStorage存储的数据也都被删除了。<br>与localStorge一样，sessionStorage的作用域也是限定在文档源中，一次非同源文档间都是无法共享sessionStorage的。不仅如此，sessionStorage的作用域还被限定在窗口中。如果同源的文档渲染在不同浏览器标签页中，那么它们互相之间拥有的是各自的sessionStorage数据。
##### 2.cookie
###### cookie数据会自动在web浏览器和web服务器之间传输的，因此服务端脚本就可以读、写存储在客户端的cookie的值。




##### 换句话说：
>三者的异同：上面的使用方式说好了，下面就唠唠三者之间的区别，这个问题其实很多大厂面试的时候也都会问到，所以可以注意一下这几个之间的区别。<br>
>
生命周期：cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localStorage：除非被手动清除，否则将会永久保存。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。<br>
存放数据大小：cookie：4KB左右。<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localStorage和sessionStorage：可以保存5MB的信息。<br>
http请求：<br>cookie：每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题。
localStorage和sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信。<br>
易用性：cookie：需要程序员自己封装，源生的Cookie接口不友好。<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localStorage和sessionStorage：源生接口可以接受，亦可再次封装来对Object和Array有更好的支持。
