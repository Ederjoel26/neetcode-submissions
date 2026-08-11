class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head;

        for (let i = 0; i < index; i++) {
            if (current === null) {
                return -1;
            }

            current = current.next;
        }

        return current === null ? -1 : current.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const n = new Node(val);
        n.next = this.head;
        this.head = n;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next) {
            current = current.next;
        } 

        current.next = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (this.head === null) {
            return false;
        }

        if (index === 0) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        for (let i = 0; i < index -1; i++) {
            if (current.next === null){
                return false;
            }

            current = current.next;
        }

        if (current.next === null) {
            return false;
        }

        current.next = current.next.next;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = [];
        let current = this.head;

        while (current) {
            values.push(current.value);
            current = current.next;
        }

        return values;
    }
}


