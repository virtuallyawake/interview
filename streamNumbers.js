/* Stream of number
rank of a number?
insert numbers
1 -> 3 -> 4 -> 6 .... -> 112

20, 15, 25, 20, 5, 13, 23, 24       
*/

var arr = [20, 15, 25, 10, 5, 13, 23, 24];

function Node(n) {
    this.value = n;
    this.left = null;
    this.right = null;
    this.countLeft = -1;
}

/*
    20
   / \
  15  25
 /   /
5   20
 \    \
  13   23
         \
          24
*/
function Tree() {
    this.root = null;
    this.insert = function(n) {
        if (!this.root) {
            this.root = new Node(n);
        } else {
            insertValue(this.root, n);
        }
    };
    this.getRank = function(n) {
        return getRankInTree(this.root, 0, n);
    };
    
    function getRankInTree(node, acc, val) {
        if (!node)
            return -1;
        if (node.value === val) {
            return acc + node.countLeft;
        }
        if (val > node.value) {
            acc += node.countLeft+1;
            return getRankInTree(node.right, acc, val);
        } else {
            return getRankInTree(node.left, acc, val)
        }
    }
    this.print = function() {
        addLeftCount(this.root);
        printTree(this.root);   
    };
    function printTree(node) {
        var queue = [];
        queue.push(node);
        while(queue.length > 0) {
            var n = queue.shift();
            console.log(n.value +" - "+ n.countLeft);
            if (n.left)
                queue.push(n.left);
            if (n.right)
                queue.push(n.right);
        }
    }
    
    function addLeftCount(n) {
        if (!n)
            return -1;
        var countL, countR = 0;
        countL = addLeftCount(n.left);
        countR = addLeftCount(n.right);
        n.countLeft = (n.left) ? countL+1 : 0;
        return countL+countR+2;
    }
    function insertValue(node, n) {
        if (n < node.value) {
            if (!node.left) {
                var newNode = new Node(n);
                node.left = newNode;
            } else {
                insertValue(node.left, n);
            }
        } else { // right side
            if (!node.right) {
                var newNode = new Node(n);
                node.right = newNode;
            } else {
                insertValue(node.right, n);
            }
        }
    }
}

var tree = new Tree();

arr.forEach(function(n) {
    tree.insert(n);
})

tree.print();

var target = 24;
var rank = tree.getRank(target);
console.log("Rank for " +target+ " : "+ rank);