class Queue {
	constructor() {
		this.storage = {}
		this.front = 0
		this.rear = 0
	}

	size() {
		if (this.storage[this.rear] === undefined) {
			return 0
		} else {
			return this.rear - this.front + 1
		}
	}

	add(value) {
		if (this.size() === 0) {
			this.storage['0'] = value
		} else {
			this.rear += 1
			this.storage[this.rear] = value
		}
	}

	popleft() {
		let temp
		if (this.front === this.rear) {
			temp = this.storage[this.front]
			delete this.storage[this.front]
			this.front = 0
			this.rear = 0
		} else {
			temp = this.storage[this.front]
			delete this.storage[this.front]
			this.front += 1
		}
		return temp
	}
}

// https://www.acmicpc.net/problem/10845

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, ...test] = input
n = +n
test = test.map((x) => x.split(' '))

const queue = new Queue()
let answer = []

for (let i = 0; i < n; i++) {
	if (test[i][0] === 'push') {
		queue.add(test[i][1])
	} else if (test[i][0] === 'pop') {
        if (queue.size() === 0) {
            answer.push(-1)
        } else {
            answer.push(queue.popleft())
        }
	} else if (test[i][0] === 'size') {
		answer.push(queue.size())
	} else if (test[i][0] === 'empty') {
		if (queue.size()) {
			answer.push(0)
		} else {
			answer.push(1)
		}
	} else if (test[i][0] === 'front') {
        if (queue.size() === 0) {
            answer.push(-1)
        } else {
            answer.push(queue.storage[queue.front])
        }
	} else if (test[i][0] === 'back') {
        if (queue.size() === 0) {
            answer.push(-1)
        } else {
            answer.push(queue.storage[queue.rear])
        }
	}
}

console.log(answer.join('\n'))
