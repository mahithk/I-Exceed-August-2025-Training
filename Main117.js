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

    insert(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            return
        }
        let temp = this.head
        while (temp.next) temp = temp.next
        temp.next = node
    }

    delete(value) {
        if (!this.head) return
        if (this.head.value === value) {
            this.head = this.head.next
            return
        }
        let temp = this.head
        while (temp.next && temp.next.value !== value) {
            temp = temp.next
        }
        if (temp.next) temp.next = temp.next.next
    }

    print() {
        let result = []
        let temp = this.head
        while (temp) {
            result.push(temp.value)
            temp = temp.next
        }
        console.log(result)
    }
}

let list = new LinkedList()
list.insert(1)
list.insert(2)
list.insert(3)
list.delete(2)
list.print()
