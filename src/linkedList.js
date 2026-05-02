export class LinkedList {
    headNode = null;
    tailNode = null;
    length = 0;

    append(value) {
        let node = new Node(value, null);

        if(this.size() === 0) {
            this.headNode = node;
            this.tailNode = node;
            this.length += 1;
            return;
        }

        this.tailNode.next = node;
        this.tailNode = node;

        this.length += 1;
    }

    prepend(value) {
        let node = new Node(value, null);

        if(this.size() === 0) {
            this.headNode = node;
            this.tailNode = node;
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

    pop() {
        if(this.size() === 0) {
            return undefined;
        } 
        
        const headValue = this.head();
        this.headNode = this.headNode.next; //If its null, that's okay
        this.length -= 1;

        if(this.length === 0) {
            this.tailNode = null;
        }

        return headValue;
    }

    contains(value) {
        if(this.size() === 0) return false;

        let curNode = this.headNode;

        while(curNode != null) {
            if(curNode.value === value) {
                return true;
            } else {
                curNode = curNode.next;
            }
        }

        return false;
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
============THINKING==================

*/