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

    insertAtEnd(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return
        }
        let temp = this.head
        while (temp.next) {
            temp = temp.next
        }
        temp.next = newNode
    }

    traverse() {
        let result = []
        let temp = this.head
        while (temp) {
            result.push(temp.value)
            temp = temp.next
        }
        return result
    }
}

let list = new LinkedList()
list.insertAtEnd(10)
list.insertAtEnd(20)
list.insertAtEnd(30)
console.log(list.traverse())
