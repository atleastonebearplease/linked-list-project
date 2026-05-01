import { LinkedList } from "../linkedList.js";
import { Node } from "../linkedList.js";

function printList(linkedList) {
    let node = linkedList.head;

    if(node === null) console.log("Nothing to print");

    while(node !== null) {
        console.log(node.value);
        node = node.next;
    }
}

describe('Linked List functionality', () => {
    let list = undefined;

    beforeEach(() => {
        list = new LinkedList();

        list.append("dog");
        list.append("cat");
        list.append("parrot");
        list.append("hamster");
        list.append("snake");
        list.append("turtle");
    });
    
    it('Exists', () => {
        expect(LinkedList).toBeDefined();
    });

    it('Append', () => {
        list.append("hello");
1
        expect(list.tail.value).toEqual("hello");
    });

    it('Prepend', () => {
        list.prepend("hey");

        expect(list.head.value).toEqual("hey");
        expect(list.tail.value).toEqual("turtle");
    });

    describe('Returns size', () => {
        it('Returns the correct size with append', () => {
            expect(list.size()).toEqual(6);
        });

        it('Returns correct size after prepend', () => {
            list.prepend('hello');
            expect(list.size()).toEqual(7);
        });
    });
});

describe('Node functionality', () => {
    it('Exists', () => {
        expect(Node).toBeDefined();
    });
});