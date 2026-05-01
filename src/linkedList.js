export class LinkedList {
    head = null;
    tail = null;
    length = 0;

    append(value) {
        let node = new Node(value, null);

        if(this.tail !== null) this.tail.next = node;
        this.tail = node;

        if(this.length === 0) this.head = node;

        this.length += 1;
    }

    prepend(value) {
        
    }
}

export class Node {
    constructor(value, next) {
        this.next = next;
        this.value = value;
    }

    value = null;
    next = null;
}


/* 
Okay, we are making the LinkedList itself and we are making the node class which will
offer a good bit of the functionality. 

Node will contain reference to previous and next
LinkedList will contain the head, tail, and then the functions for operating on the list

Functions: 
append(value)
prepend(value)
size()
head()
tail()
at(index)
pop()
contains(value)
findIndex(value)
toString()
insertAt()
removeAt(index)

*/