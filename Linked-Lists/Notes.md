Linked Lists are objects connected by references. To iterate a Linked List, you need to be able to follow its references step by step.

The simplest form of linked lists — a singly linked list — is a series of nodes where each individual node contains both a value and a pointer to the next node in the list.

 Linked List, unlike arrays have no built-in methods, that means we have to build our own.

Additions (Add) grow the list by adding items to the end of the list.

Removals (Remove) will always remove from a given position in the list.

Search (Contains) will search the list for a value.

A linked list is formed by 4 elements:

**Nodes** an object that contains the value and the pointer to the next element.

**Head** The first Node of the list

**Tail** The last Node of the list. This object as a property next that is set to null

**Length** (or Size) the length of the list.

# Practical Uses for Linked Lists
## When to Use a Linked List (in a Frontend App)
You need to make a lot of modifications to the list — especially when adding or removing items somewhere other than the end of the list. A stock ticker that updates in real time, and adds new items to the top of the list is a good example.

You don’t need to access individual items in the list frequently — for example a read-only log.

Double Linked Lists can be valuable when you need to easily navigate a list in either direction. Double Linked Lists can navigate in reverse without recursion.

Also, level of videogames can be seen as Linked List, you play on the first level once you finish that level you can only go to the next one.

# Two key components: the element and the reference to the next element

**Arrays:**

Fixed size

Inefficient Insertions and deletions

Random access efficient indexing

May result in memory waste

sequential access is faster [Reason:
Elements in contigous memory in locations]

**Linked Lists:**

Dynamic size

Efficient insertions and deletions

No random access

No waste of memory

Sequential access is slow [Reason:
Elements not in contigous memory locations]