class MinHeap {
    constructor() {
        this.items = [null]
    }

    insert(value) {
        this.items.push(value)
        let index = this.items.length - 1

        while (index > 1) {
            const parentIndex = Math.floor(index / 2)
            if (this.items[index] < this.items[parentIndex]) {
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
            let minIndex = index
            
            if (left <= this.items.length - 1 && this.items[left] < this.items[minIndex]) {
                minIndex = left
            }

            if (right <= this.items.length - 1 && this.items[right] < this.items[minIndex]) {
                minIndex = right
            }

            if (minIndex === index) break

            const temp = this.items[minIndex]
            this.items[minIndex] = this.items[index]
            this.items[index] = temp

            index = minIndex
        }

        return firstNode
    }
}

// https://www.acmicpc.net/problem/1927

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...commands] = input

let answer = ''
const heap = new MinHeap()
for (let i = 0; i < +n; i++) {
    const command = +commands[i]
    if (command === 0) {
        const minimum = heap.delete()
        answer += minimum === undefined ? 0 : minimum
        answer += '\n'
    } else {
        heap.insert(command)
    }
}
console.log(answer)