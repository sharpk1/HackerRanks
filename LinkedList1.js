// Create a node class with the parameter element to pass in as the value 
class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

// Creat a class that has a head 
// with the built in function of add and a parameter of element which 
// creates a node 
class LinkedList1 {
    constructor(){
        this.head = null;
        this.size = 0;
    }


    add(element){
        
        // set node to the Node you passed in 
        let node = new Node(element);
        let current;

        // if head is null (the beginning), then set the node you apssed in as the head
        if(this.head == null){
            this.head = node;
        }else{
            // set the current node to the head of the current node passed in
            current = this.head;

            // while current.next is valid
            while (current.next){
                console.log(current.next);
                // Iterate to the end of the list until there is no more next
                current = current.next;
            }
            // set the last node to the "next" value
            current.next = node;
        }
        this.size++;
    }
}

let myList = new LinkedList1();

let node_1 = new Node(4);
let node_2 = new Node(5);
let node_3 = new Node(6);
let node_4 = new Node(7);

myList.add(node_1);
myList.add(node_2);
myList.add(node_3);
myList.add(node_4);

console.log(myList);