// https://www.acmicpc.net/problem/11279

class MaxHeap {
    constructor() {
        this.items = [null]
    }

    insert(value) {
        this.items.push(value)
        let index = this.items.length - 1

        while (index > 1) {
            const parentIndex = Math.floor(index / 2)
            if (this.items[index] > this.items[parentIndex]) {
                const temp = this.items[parentIndex]
                this.items[parentIndex] = this.items[index]
                this.items[index] = temp
                index = parentIndex
            } else break
        }
    }

    delete() {
        const firstNode = this.items[1]
        this.items[1] = this.items[this.items.length - 1]
        this.items[this.items.length - 1] = firstNode
        this.items.pop()

        let index = 1

        while (index <= this.items.length - 1) {
            const left = index * 2
            const right = index * 2 + 1
            let maxIndex = index
            
            if (left <= this.items.length - 1 && this.items[left] > this.items[maxIndex]) {
                maxIndex = left
            }

            if (right <= this.items.length - 1 && this.items[right] > this.items[maxIndex]) {
                maxIndex = right
            }

            if (maxIndex === index) break

            const temp = this.items[maxIndex]
            this.items[maxIndex] = this.items[index]
            this.items[index] = temp

            index = maxIndex
        }

        return firstNode
    }
}

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [num, ...commands] = input

num = +num
commands = commands.map(x => +x)

const maxHeap = new MaxHeap()
const result = []

for (const command of commands) {
    if (command !== 0) {
        maxHeap.insert(command)
    } else {
        let toDelete = maxHeap.delete()
        if (!toDelete) toDelete = 0
        result.push(toDelete)
    }
}

console.log(result.join('\n'))