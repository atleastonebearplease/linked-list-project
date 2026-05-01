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

    beforeAll(() => {
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

    it('Appends a value', () => {
        list.append("Hello");

        expect(list.tail.value).toEqual("Hello");
    });

    it('Prepends a value', () => {
        list.prepend("Hey");

        expect(list.head.value).toEqual("Hey");
    });
});

describe('Node functionality', () => {
    it('Exists', () => {
        expect(Node).toBeDefined();
    });
});