// https://www.acmicpc.net/problem/1374

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

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [num, ...lectures] = input

num = +num
lectures = lectures
    .map((x) => x.split(' '))
    .map((x) => x.map((x) => +x))
    .sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        } else {
            return a[2] - b[2]
        }
    })

let count = 0
const minHeap = new MinHeap()
for (let i = 0; i < num; i++) {
    const lecture = lectures[i]

    const start = lecture[1]
    const end = lecture[2]

    if (i === 0) {
        minHeap.insert(end)
        count++
        continue
    }

    if (start < minHeap.items[1]) {
        minHeap.insert(end)
        count++
    } else {
        minHeap.delete()
        minHeap.insert(end)
    }
}
console.log(minHeap.items)
console.log(count)
