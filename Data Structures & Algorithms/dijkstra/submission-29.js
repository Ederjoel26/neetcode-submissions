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
        const adj = Array.from({ length: n }, () => []);
        for (const [s, d, w] of edges) { 
            adj[s].push({target: d, weight:w});
        }

        const distances = new Array(n).fill(Infinity);
        distances[src] = 0;

        const pq = new PriorityQueue2((a, b) => a.weight - b.weight)
        pq.enqueue({ node: src, weight: 0 });

        while (!pq.isEmpty()) {
            const { node: currentNode, weight: currentWeight } = pq.dequeue();

            if (currentWeight > distances[currentNode]) continue;

            for (const edge of adj[currentNode]) {
                const newDist = currentWeight + edge.weight;
                if (newDist < distances[edge.target]) {
                    distances[edge.target] = newDist;
                    pq.enqueue({ node: edge.target, weight: newDist });
                }
            }
        }

        const result = {};
        for (let i = 0; i < n; i++) {
            result[i] = distances[i] === Infinity ? -1 : distances[i];
        }

        return result;
    }
}