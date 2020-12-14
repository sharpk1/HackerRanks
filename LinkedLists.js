// const list = {
//     head: {
//         value: 6,
//         next: {
//             value: 10,
//             next: {
//                 value: 12,
//                 next: {
//                     value: 3,
//                     next: null
//                 }
//             }
//         }
//     }
// };


class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;          
    }
    
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node){
            count++
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }
}

// Creating two nodes
let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(8);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

console.log(list);

// console.log(list.size());
// console.log(list.getLast());
// console.log(list.getFirst());
// console.log(list.clear());