/* eslint-disable max-classes-per-file */
// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // links the OLD head as next by passing ref as second param
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter += 1;
      node = node.next;
    }

    return counter;
  }
}

module.exports = { Node, LinkedList };
