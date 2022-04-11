class Deque {
	constructor() {
		this.data = []
		this.rear = 0
	}

	push_front(element) {
		this.data.unshift(element)
		this.rear = this.rear + 1
	}

	push_back(element) {
		this.data[this.rear] = element
		this.rear = this.rear + 1
	}

	pop_front() {
		if (this.isEmpty() === false) {
			this.rear = this.rear - 1
			return this.data.shift()
		}

		return false
	}

	pop_back() {
		if (this.isEmpty() === false) {
			this.rear = this.rear - 1
			return this.data.pop()
		}

		return false
	}

	length() {
		return this.rear
	}

	isEmpty() {
		return this.rear === 0
	}

	getFront() {
		if (this.isEmpty() === false) {
			return this.data[0]
		}

		return false
	}

	getLast() {
		if (this.isEmpty() === false) {
			return this.data[this.rear - 1]
		}

		return false
	}

	print() {
		for (let i = 0; i < this.rear; i++) {
			console.log(this.data[i])
		}
	}
}

// https://www.acmicpc.net/problem/10866

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, ...test] = input
n = +n
test = test.map((x) => x.split(' '))

const deque = new Deque()
const answer = []
for (let i = 0; i < n; i++) {
	if (test[i][0] === 'push_front') {
		deque.push_front(test[i][1])
	} else if (test[i][0] === 'push_back') {
		deque.push_back(test[i][1])
	} else if (test[i][0] === 'pop_front') {
		if (deque.isEmpty()) {
			answer.push(-1)
		} else {
			answer.push(deque.pop_front())
		}
	} else if (test[i][0] === 'pop_back') {
		if (deque.isEmpty()) {
			answer.push(-1)
		} else {
			answer.push(deque.pop_back())
		}
	} else if (test[i][0] === 'size') {
		answer.push(deque.length())
	} else if (test[i][0] === 'empty') {
		if (deque.isEmpty()) {
			answer.push(1)
		} else {
			answer.push(0)
		}
	} else if (test[i][0] === 'front') {
		if (deque.isEmpty()) {
			answer.push(-1)
		} else {
			answer.push(deque.getFront())
		}
	} else if (test[i][0] === 'back') {
		if (deque.isEmpty()) {
			answer.push(-1)
		} else {
			answer.push(deque.getLast())
		}
	}
}
console.log(answer.join('\n'))
