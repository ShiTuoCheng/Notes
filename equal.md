#### 看到很多人都说 == 检查值相等，=== 检查值和类型是否相等。但是应该是 == 允许在比较中进行强制类型转换，而 === 不进行强制类型转换。

#### 而且==比较算法，根据es规范的11.9.3章节所述为 抽象相等比较算法：

> 比较运算x==y, 其中x和 y是值，产生true或者false。这样的比较按如下方式进行：<br>

>若Type(x)与Type(y)相同， 则<br>
>若Type(x)为Undefined， 返回true。<br>
>若Type(x)为Null， 返回true。<br>
>若Type(x)为Number， 则<br>
>若x为NaN， 返回false。<br>
>若y为NaN， 返回false。<br>
>若x与y为相等数值， 返回true。<br>
>若x 为 +0 且 y为−0， 返回true。<br>
>若x 为 −0 且 y为+0， 返回true。<br>
>返回false。<br>
>若Type(x)为String, 则当x和y为完全相同的字符序列（长度相等且相同字符在相同位置）时返回true。 否则， 返回false。<br>
>若Type(x)为Boolean, 当x和y为同为true或者同为false时返回true。 否则， 返回false。<br>
>当x和y为引用同一对象时返回true。否则，返回false。<br>
>若x为null且y为undefined， 返回true。<br>
>若x为undefined且y为null， 返回true。<br>
>若Type(x) 为 Number 且 Type(y)为String， 返回comparison x == ToNumber(y)的结果。<br>
>若Type(x) 为 String 且 Type(y)为Number，<br>
>返回比较ToNumber(x) == y的结果。<br>
>若Type(x)为Boolean， 返回比较ToNumber(x) == y的结果。<br>
>若Type(y)为Boolean， 返回比较x == ToNumber(y)的结果。<br>
>若Type(x)为String或Number，且Type(y)为Object，返回比较x == ToPrimitive(y)的结果。<br>
>若Type(x)为Object且Type(y)为String或Number， 返回比较ToPrimitive(x) == y的结果。<br>
>返回false。<br>
>按以上相等之定义：<br>

>字符串比较可以按这种方式强制执行: "" + a == "" + b 。<br>
>数值比较可以按这种方式强制执行: +a == +b 。<br>
>布尔值比较可以按这种方式强制执行: !a == !b 。<br>
 等值比较操作保证以下不变：<br>

>A != B 等价于 !(A==B) 。<br>
>A == B 等价于 B == A ，除了A与B的执行顺序。<br>
>相等运算符不总是传递的。例如，两个不同的String对象，都表示相同的字符串值； == 运算符认为每个String对象都与字符串值相等，但是两个字符串对象互不相等。例如：<br>

>new String("a") == "a" 和 "a" == new String("a") 皆为true。<br>
>new String("a") == new String("a") 为false。<br>
>字符串比较使用的方式是简单地检测字符编码单元序列是否相同。不会做更复杂的、基于语义的字符或者字符串相等的定义以及Unicode规范中定义的collating order。所以Unicode标准中认为相等的String值可能被检测为不等。实际上这一算法认为两个字符串已经是经过规范化的形式。


## 个人总结：
#### 1.两个对象指向一个值得时候，不发生强制类型转换。
#### 2.== 在比较两个不同类型的值的时候，会发生隐式强制类型转换，会将其中之一或两者都转换为相同的类型后再进行比较。
#### 3.字符串和数字之间的相等比较 x == y ： ‘42’ == 42// true ‘42’===42// false
##### （1）如果Type(x)为数字，Type(y)为字符串，则会 x == ToNumber(y)
##### （2）如果Type(x)为字符串，Type(y)为数字，则会 ToNumber(x) == y
#### 4.其他类型和布尔值之间的比较 “42” == true // false
##### （1）如果Type(x)为布尔值，则会 ToNumber(x) == y
##### （2）如果Type(y)为布尔值，则会 ToNumber(y) == x
