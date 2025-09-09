class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            return node
        }
        let temp = this.head
        while (temp.next) temp = temp.next
        temp.next = node
        return node
    }

    hasCycle() {
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) return true
        }
        return false
    }
}

let list = new LinkedList()
let n1 = list.append(1)
let n2 = list.append(2)
let n3 = list.append(3)
n3.next = n1
console.log(list.hasCycle())
