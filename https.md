## HTTPS学习笔记

> 本文主要来源于《图解http》+ 其他大佬文章 + 个人理解

### 1.HTTP相较于HTTPS有什么区别？

#### (1)HTTP是明文传输。
#### (2)HTTPS比HTTP多了一层ssl或者tsl协议，或者可以说https是http的加密版或者是http套了一层ssl的壳子。

### 2.下面来梳理一下网络七层结构

| 结构    | 作用    |
| ------- | ------|
| 应用层   |   http、https、ftp、pop3等     |
| 表示层   |        |
| 会话层   |        |
| 传输层   |  tcp、udp      |
| 网络层   |  ip      |
| 数据链路层 |        |
| 物理层    |      |


### 3.HTTP和HTTPS结构的区别
| HTTP    |HTTPS    |
| ------- | ------|
|         |   SSL TSL  |
| TCP   |   TCP     |
| IP  |    IP    |

### 4.HTTPS的工作原理

#### 1.首先客户端和服务端通信协商ssl版本和加密组件列表
#### 2.服务端向客户端发送包含公钥的证书
#### 3.客户端收到证书以后，使用浏览器内置的认证机构的秘钥对服务端发送过来的证书进行解密，获得公钥。之后验证证书真实性。
#### 4.客户端生成随机数 也被叫做premaster secret。之后用获得的公钥加密。
#### 5.客户端将加密过的premaster secret传给服务端。服务端用自己的私钥对加密字符串进行解密，得到premaster secret。
#### 6.之后的数据交流就是用premaster secret进行加密

