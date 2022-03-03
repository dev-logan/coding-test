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

// https://www.acmicpc.net/problem/1021

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, tests] = input
const [n, m] = nums.split(' ').map(x => +x)
const targets = tests.split(' ').map(x => +x)

for (let i = 0; i < m; i++) {
    console.log(targets[i])
}