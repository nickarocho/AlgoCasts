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
    // this.head = new Node(data, this.head);

    // utilizing reusable class method
    this.insertAt(data, 0);
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

  getFirst() {
    // return this.head;

    // utilizing reusable class method
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) return null;
    // let node = this.head;
    // while (node) {
    //   if (!node.next) return node;
    //   node = node.next;
    // }

    // utilizing reusable methods instead
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = previous.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    const last = this.getLast();
    last.next = new Node(data);
  }

  getAt(idx) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === idx) {
        return node;
      }
      node = node.next;
      counter += 1;
    }
    return null;
  }

  removeAt(idx) {
    if (!this.head) return null;
    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(idx - 1);
    if (!previous || !previous.next) return null;
    previous.next = previous.next.next;
  }

  insertAt(data, idx) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (idx === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(idx - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter += 1;
    }
  }

  // generator fn
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
