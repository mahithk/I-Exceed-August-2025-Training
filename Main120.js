class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    insert(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            return
        }
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
    }

    delete(value) {
        let temp = this.head
        while (temp && temp.value !== value) temp = temp.next
        if (!temp) return
        if (temp.prev) temp.prev.next = temp.next
        else this.head = temp.next
        if (temp.next) temp.next.prev = temp.prev
        else this.tail = temp.prev
    }

    displayForward() {
        let arr = []
        let temp = this.head
        while (temp) {
            arr.push(temp.value)
            temp = temp.next
        }
        console.log(arr)
    }
}

let dll = new DoublyLinkedList()
dll.insert(5)
dll.insert(10)
dll.insert(15)
dll.delete(10)
dll.displayForward()
