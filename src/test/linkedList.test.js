import { LinkedList } from "../linkedList.js";
import { Node } from "../linkedList.js";

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
        expect(list.tail()).toEqual("hello");

        expect(list.size()).toEqual(7);
    });

    it('Prepend', () => {
        list.prepend("hey");

        expect(list.head()).toEqual("hey");
        expect(list.headNode.next.value).toEqual('dog');
        expect(list.tail()).toEqual("turtle");
        expect(list.size()).toEqual(7);
    });

    describe('Returns correct size', () => {
        it('Returns the correct size with append', () => {
            expect(list.size()).toEqual(6);
        });

        it('Returns correct size after prepend', () => {
            list.prepend('hello');
            expect(list.size()).toEqual(7);
        });
    });

    it('Returns head value', () => {
        expect(list.head()).toEqual('dog');
    });

    it('Returns tail value', () => {
        expect(list.tail()).toEqual('turtle');
    });
    
    describe('At', () => {
        it('Returns value at index', () => {
            expect(list.at(3)).toEqual('hamster');
        });

        it('Returns undefined for out of bounds index', () => {
            expect(list.at(100)).toEqual(undefined);
        });
    });

    describe('Pop', () => {
        it('Returns the head value', () => {
            expect(list.pop()).toEqual('dog');
        });

        it('Correctly moves the head value', () => {
            list.pop();
            expect(list.head()).toEqual('cat');
        });

        it('Correctly updates length', () => {
            list.pop();
            expect(list.size()).toEqual(5);
        });

        it('Returns undefined on empty list', () => {
            let emptyList = new LinkedList();

            expect(emptyList.pop()).toEqual(undefined);
        });
    });

    describe('Contains', () => {
        it('Returns true if a value is contained', () => {
            expect(list.contains('turtle')).toEqual(true);
        });

        it('Returns false if a value is not contained or is empty', () => {
            expect(list.contains('hello')).toEqual(false);
            
            let newList = new LinkedList();

            expect(list.contains('hello')).toEqual(false);
        });
    });

    describe('FindIndex(value)', () => {
        it('Correctly finds index of value', () => {
            expect(list.findIndex('snake')).toEqual(4);
            expect(list.findIndex('dog')).toEqual(0);
        });

        it('Returns -1 if the value is not found', () => {
            expect(list.findIndex('hello')).toEqual(-1);
        });
    });

    /*  ( value ) -> ( value ) -> ( value ) -> null. */

    describe('ToString()', () => {
        it('Creates correct string', () => {
            expect(list.toString()).toEqual("( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
        });
    });

    describe('InsertAt()', () => {
        it('Inserts a single value', () => {
            list.insertAt(1, 'sheep');

            expect(list.at(1)).toEqual('sheep');
            expect(list.at(2)).toEqual('cat');
            expect(list.size()).toEqual(7);

            console.log(list.toString());
        });

        it("Inserts multiple values", () => {
            list.insertAt(1, 'sheep', 'goat');

            console.log(list.toString());

            expect(list.at(1)).toEqual('sheep');
            expect(list.at(2)).toEqual('goat');
            expect(list.at(3)).toEqual('cat');

            expect(list.size()).toEqual(8);
        });

        it("Inserts at beginning", () => {
            list.insertAt(0, 'sheep');

            expect(list.at(0)).toEqual('sheep');
        });

        it("Inserts at end", () => {
            list.insertAt(5, 'sheep');

            expect(list.at(5)).toEqual('sheep');
            expect(list.at(6)).toEqual('turtle');
        });

        it("Inserts multiple values at beginning", () => {
            list.insertAt(0, 'sheep', 'goat');

            expect(list.at(0)).toEqual('sheep');
            expect(list.at(1)).toEqual('goat');
            expect(list.at(2)).toEqual('dog');

            console.log(list.toString());
        });

        it("Inserts multiple values at end", () => {
            list.insertAt(5, 'sheep', 'goat');

            expect(list.at(5)).toEqual('sheep');
            expect(list.at(6)).toEqual('goat');
            expect(list.at(7)).toEqual('turtle');

            console.log(list.toString());
        });
    });
});

describe('Node functionality', () => {
    it('Exists', () => {
        expect(Node).toBeDefined();
    });
});

/* 
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
*/