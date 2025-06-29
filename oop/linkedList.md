# 📚 Introduction to Linked Lists in JavaScript

A linked list is a fundamental data structure used to store collections of data in a linear order, similar to arrays. However, unlike arrays, linked lists do not store elements in contiguous memory locations.

Instead, each element (called a node) contains:
	•	The data itself
	•	A reference (or pointer) to the next node in the sequence

⸻

## 🧱 What is a Node?

A node is the basic building block of a linked list.

```javascript
class Node {
  constructor(data) {
    this.data = data;     // The value being stored
    this.next = null;     // Pointer to the next node
  }
}
```

## 🏗️ Structure of a Linked List

A LinkedList class typically manages the entire list and keeps track of the head, which is the first node in the list.

```javascript
class LinkedList {
  constructor() {
    this.head = null;    // Start of the list
  }
}
```

## ➕ Common Linked List Operations

Here are some of the most common operations performed on linked lists:

| Operation | Description |
|---------- |------------ |
| Append    | Add a new node to the end of the list |
| Prepend   | Add a new node to the beginning |
| Delete    | Remove a node with a specific value |
| Traverse  | Visit each node in sequence |
| Search    | Find a node with a specific value |


## ✅ Example: Adding Elements to a Linked List

```javascript
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();
// Output: 10 -> 20 -> 30 -> null
```

## ✨ Benefits of Linked Lists
	•	✅ Dynamic size (no need to predefine length)
	•	✅ Fast insertions and deletions at the start or middle
	•	✅ Efficient memory usage for frequent add/remove operations

⸻

## ⚠️ Things to Keep in Mind
	•	❌ Access time is slower compared to arrays (no direct index access)
	•	❌ Requires careful pointer management (to avoid breaking the list)
	•	✅ Null checks are critical to avoid runtime errors when traversing



## ✅ Situations Where Linked Lists Are Better Than Arrays (Markdown Table)

| Scenario | Why Linked Lists Help |
|---------|------------------------|
| Frequent Insertions at the Start | In an array, inserting at index `0` shifts all elements (O(n)), but in a linked list, you can **prepend** in constant time (O(1)). |
| Frequent Deletions from the Start or Middle | Arrays require shifting elements after deletion. Linked lists can **remove nodes** by simply changing pointers (O(1) if you have a reference). |
| Unknown or Dynamic Size | If you don't know the total number of elements beforehand, linked lists grow **without resizing overhead** (no reallocation like with arrays). |
| Implementing Queues and Stacks | Linked lists make **Queue (FIFO)** and **Stack (LIFO)** implementations efficient, especially for **enqueue, dequeue, push, pop** operations. |
| Real-time Streaming Data | When data keeps arriving in chunks (like from a network stream), linked lists help by **efficiently appending new data as it comes** without needing to resize. |
| Memory-Constrained Systems (Low-Level Cases) | Though less common in JavaScript, in low-level systems where **contiguous memory for arrays is hard to allocate**, linked lists excel because **nodes can live anywhere in memory**. |



✅ Quick Example Comparison: Arrays vs Linked Lists (Markdown Table)

| Operation | Array (JavaScript) | Linked List |
|---|---|---|
| Insert at start | Slow (O(n)) | Fast (O(1)) |
| Delete at start | Slow (O(n)) | Fast (O(1)) |
| Access by index | Fast (O(1)) | Slow (O(n)) |
| Dynamic growth | Can require resizing | Grows naturally |


## 📎 Summary

A linked list is a versatile and powerful data structure for storing ordered data.  

Unlike arrays, linked lists provide **efficient insertions and deletions**, especially at the start or middle of the list. They grow dynamically and don’t require resizing, making them useful in situations where **data size changes frequently** or **constant-time operations** on the head are needed.

Understanding how to build, traverse, and manipulate linked lists is a key foundational skill in both **JavaScript** and **computer science in general**, especially for solving coding interview problems and designing efficient algorithms.

