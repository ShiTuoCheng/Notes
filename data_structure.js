/*jshint esversion: 6 */
// 列表
class list {

    constructor(listSize = 0, position = 0, dataSource = []){

        this.listSize = listSize;
        this.position = position;
        this.dataSource = dataSource;
    }

    // 向尾端插入一个元素
    append(element){

        this.dataSource[this.listSize++] = element;
    }

    // 在队列中寻找一个元素
    find(element) {

        for (let i=0; i<this.dataSource.length; i++){
            if (this.dataSource[i] === element) {
                return i;
            }
        }
        return -1;
    }
    // 删除队列中的一个元素
    remove(element){

        let foundedAt = this.find(element);
        if(foundedAt > -1){
            this.dataSource.splice(foundedAt, 1);
            --this.listSize;
            return true;
        }else{
            return false;
        }
    }

    // 在特定目标后插入一个元素
    insert(element, after){
        let insertPosition = this.dataSource.find(after);
        if(insertPosition !== -1){
            this.dataSource.splice(insertPosition, 0, element);
            this.listSize++;
            return true;
        }else{
            return false;
        }
    }

    // 获取队列的长度
    getLength(){
        return this.listSize;
    }

    // 显示队列的元素
    getData(){
        return this.dataSource;
    }
}

// 二叉树节点
class TreeNode{
    constructor(data, left, right){

        this.data = data;
        this.left = left;
        this.right = right;
    }

    // showData() {
    //     return this.data;
    // }
}

// 二叉树构造函数
class BTreeFactory{

    constructor(root){
        this.root = null;
    }

    // 插入一个节点
    insert(data) {
        let node = new TreeNode(data, null, null);

        if(this.root === null){
            this.root = node;
        }else{

            let current = this.root,
                parent;

            while(true){

                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current === null){

                        parent.left = node;
                        break;
                    }
                }else{
                    current = current.right;
                    if(current === null){

                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }

    // 中序遍历 顺序：首先遍历左子树，然后访问根结点，最后遍历右子树。
    ldrTranverse(node){
        if (node !== null) {
            this.ldrTranverse(node.left);
            console.log(node.root);
            this.ldrTranverse(node.right);
        }
    }

    //前序遍历 顺序：首先遍历根结点，然后访问左子树，最后遍历右子树。
    dlrTranverse(node){
        if(node !== null){
            this.dlrTranverse(node.root);
            console.log(node.left);
            this.dlrTranverse(node.right);
        }
    }

    //二叉树后续遍历 首先遍历左子树， 然后访问右子树， 最后访问根结点。
    lrdTranverse(node){
        if(node !== null){
            this.lrdTranverse(node.left);
            this.lrdTranverse(node.right);
            console.log(node.root);
        }
    }
}

// 栈数据结构
class stack{
    constructor(dataSource = [], top = 0){
        this.dataSource = dataSource; 
        this.top = top;
    }

    //向栈中压入一个元素
    push(element){
        this.dataSource[this.top++].push(element);
    }

    // 弹出栈中第一个元素
    pop(){
        return this.dataSource[this.top--];
    }

    //弹出栈中最后一个元素
    peek(){
        return this.dataSource[this.top-1];
    }

    getLength(){
        return this.top;
    }

    clear(){
        this.top = 0;
    }
}

//链表
class Node{
    constructor(element){
        this.next = null;
        this.element = element;
    }
}

class LinkedNode{
    constructor(head, length = 0){
        this.head = new Node(head);
        this.length = length;
    }

    // 插入一个节点
    append(element){
        let node = new Node(element),
            current;
        
        if(this.head === null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    // 删除一个节点
    remove(position){
        if(position > -1 && position < this.length){
            let current = head,
                previous,
                index = 0;

            if(position === 0){
                this.head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = previous.next;
                }

                previous.next = current.next;
            }

            this.length--;
            return current.element;
        }else{
            return null;
        }
    }

    // 在某一位置插入某个元素
    insert(position, element){

        if(position > -1 && position < this.length){
            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if(position === 0){

                this.head = node;
                node.next = current;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }

            this.length++;
            return true;
        }else {
            return false;
        }
    }
}
