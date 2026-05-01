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
        let node = new Node(value, this.head);

        this.head = node;

        this.length += 1;
    }

    size() {
        return this.length;
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
Okay, we're now adding a value to the front. This means that we have to make the next value the current head
then make the new head value the one we added
*/