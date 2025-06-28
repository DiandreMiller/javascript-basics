📚 Introduction to Linked Lists in JavaScript

A linked list is a fundamental data structure used to store collections of data in a linear order, similar to arrays. However, unlike arrays, linked lists do not store elements in contiguous memory locations.

Instead, each element (called a node) contains:
	•	The data itself
	•	A reference (or pointer) to the next node in the sequence

⸻

🧱 What is a Node?

A node is the basic building block of a linked list.

```javascript
class Node {
  constructor(data) {
    this.data = data;     // The value being stored
    this.next = null;     // Pointer to the next node
  }
}
```

🏗️ Structure of a Linked List

A LinkedList class typically manages the entire list and keeps track of the head, which is the first node in the list.

```javascript
class LinkedList {
  constructor() {
    this.head = null;    // Start of the list
  }
}
```

➕ Common Linked List Operations

Here are some of the most common operations performed on linked lists:

| Operation | Description |
|---------- |------------ |
| Append    | Add a new node to the end of the list |
| Prepend   | Add a new node to the beginning |
| Delete    | Remove a node with a specific value |
| Traverse  | Visit each node in sequence |
| Search    | Find a node with a specific value |


✅ Example: Adding Elements to a Linked List

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

✨ Benefits of Linked Lists
	•	✅ Dynamic size (no need to predefine length)
	•	✅ Fast insertions and deletions at the start or middle
	•	✅ Efficient memory usage for frequent add/remove operations

⸻

⚠️ Things to Keep in Mind
	•	❌ Access time is slower compared to arrays (no direct index access)
	•	❌ Requires careful pointer management (to avoid breaking the list)
	•	✅ Null checks are critical to avoid runtime errors when traversing



📎 Summary

A linked list is a versatile and powerful data structure for ordered data, especially useful when your application involves frequent insertions and deletions.

Understanding how to build and manipulate linked lists is a key foundational skill in JavaScript and computer science in general.

