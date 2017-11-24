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
class Node{
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
        let node = new Node(data, null, null);

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
