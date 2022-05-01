const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.list = new ListNode()
  }
  

  getUnderlyingList() {
    return this.list
  };

  enqueue(value) {
    if (!this.list.value) {                      
      this.list.value = value;
      return        
    }   
    let node = new ListNode(value)  ;
    let currentNode = this.list;
    
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node
  }

  dequeue() {
    let node = this.list.value;
    this.list = this.list.next;
    return node;
  }
}

module.exports = {
  Queue
};
