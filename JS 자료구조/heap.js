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

//////////////////////////////////////////////////////////////////////////////////////////////

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