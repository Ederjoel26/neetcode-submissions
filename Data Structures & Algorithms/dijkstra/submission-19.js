/**
 * const PriorityQueue = require('priority-queue-js');
 */
class PriorityQueue2 {
  /**
   * @param {Function} comparator - Custom comparison function.
   * Default: (a, b) => a - b (Min-Heap: lowest number = highest priority)
   */
  constructor(comparator = (a, b) => a - b) {
    this._heap = [];
    this._comparator = comparator;
  }

  // Returns the total number of elements in the queue
  size() {
    return this._heap.length;
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.size() === 0;
  }

  // Returns the highest priority element without removing it
  peek() {
    return this.isEmpty() ? undefined : this._heap[0];
  }

  // Inserts a new element into the priority queue
  enqueue(value) {
    this._heap.push(value);
    this._siftUp(this.size() - 1);
  }

  // Removes and returns the highest priority element
  dequeue() {
    if (this.isEmpty()) return undefined;
    
    const top = this._heap[0];
    const bottom = this._heap.pop();
    
    if (!this.isEmpty()) {
      this._heap[0] = bottom;
      this._siftDown(0);
    }
    
    return top;
  }

  printQueue(){
    for (let i = 0; i < this._heap.length; i++){
        console.log(this._heap[i]);
    }
  }

  // Helper: Moves an element up to restore the heap property
  _siftUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this._comparator(this._heap[index], this._heap[parentIndex]) >= 0) {
        break;
      }
      this._swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // Helper: Moves an element down to restore the heap property
  _siftDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      let candidate = index;

      if (leftChild <= lastIndex && this._comparator(this._heap[leftChild], this._heap[candidate]) < 0) {
        candidate = leftChild;
      }
      if (rightChild <= lastIndex && this._comparator(this._heap[rightChild], this._heap[candidate]) < 0) {
        candidate = rightChild;
      }
      if (candidate === index) {
        break;
      }
      this._swap(index, candidate);
      index = candidate;
    }
  }

  // Helper: Swaps two elements in the internal array
  _swap(i, j) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const unvisitedNodes = new Set();
        const weights = {};

        for(let i = 0; i < n; i++) {
            weights[i] = -1;
            unvisitedNodes.add(i);
        }

        //default rule
        weights[src] = 0;

        const currentNode = { node: src, weight: 0 };
        const pq = new PriorityQueue2((a, b) => a.weight - b.weight)
        for (let i = 0; i < n; i++) {
            const currentNodeEdges = edges.filter(e => e[0] === currentNode.node);
            for (let j = 0; j < currentNodeEdges.length; j++) {
                const [s, d, w] = currentNodeEdges[j];
                const weightDestiny = weights[d];
                const indexWeight =  weights[s] !== -1
                    ? weights[s] 
                    : currentNode.weight;
                const realWeight = indexWeight + w;

                if (weightDestiny > realWeight || weightDestiny === -1) {
                    weights[d] = realWeight;
                    pq.enqueue({node: d, weight: realWeight});
                }
            }
            
            unvisitedNodes.delete(currentNode.node); 

            let front = pq.peek(); 
            if (!front) break;

            while (!unvisitedNodes.has(front.node)) { 
                if (pq.isEmpty()) break;
                pq.dequeue();
                front = pq.peek(); 
                if (!front) break;
            }

            pq.printQueue();
            if (!front) break;
            currentNode.node = front.node;
            currentNode.weight = front.weight;
        }

        return weights;
    }
}
