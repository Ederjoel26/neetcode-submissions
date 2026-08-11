class DynamicArray {
    container;
    _capacity; 
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.container = [];
        this._capacity = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.container[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        if (i > this._capacity) return;
        this.container[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.getSize() === this._capacity) {
            this.resize();
        }

        this.container.push(n);
    }

    /**
     * @returns {number}
     */
    popback() {
        return this.container.pop();
    }

    /**
     * @returns {void}
     */
    resize() {
        this._capacity *= 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.container.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this._capacity;
    }
}
