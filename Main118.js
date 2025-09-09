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

    add(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            return
        }
        let temp = this.head
        while (temp.next) temp = temp.next
        temp.next = node
    }

    reverse() {
        let prev = null
        let current = this.head
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    display() {
        let arr = []
        let temp = this.head
        while (temp) {
            arr.push(temp.value)
            temp = temp.next
        }
        console.log(arr)
    }
}

let list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.reverse()
list.display()
