export class LinkedList {
    headNode = null;
    tailNode = null;
    length = 0;

    append(value) {
        let node = new Node(value, null);

        if(this.tailNode !== null) this.tailNode.next = node;
        this.tailNode = node;

        if(this.length === 0) this.headNode = node;

        this.length += 1;
    }

    prepend(value) {
        let node = new Node(value, null);

        if(this.headNode === null) {
            this.length += 1;
            return;
        }

        node.next = this.headNode;
        this.headNode = node;

        this.length += 1;
    }

    size() {
        return this.length;
    }

    head() {
        return this.headNode.value;
    }

    tail() {
        return this.tailNode.value;
    }

    at(index) {
        if(index < 0 || index > this.size() - 1) return undefined;

        let node = this.headNode;

        for(let i = 0; i < index; i++) {
            node = node.next;
        }

        return node.value;
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