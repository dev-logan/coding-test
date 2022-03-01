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

// https://www.acmicpc.net/problem/18258

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...commands] = input

let idx = 0
const queue = new Queue()
let answer = ''
for (let i = 0; i < +n; i++) {
	const command = commands[idx++]
    if (command.split(' ')[0] === 'push') {
        queue.add(+command.split(' ')[1])
    } else if (command === 'pop') {
        if (queue.size() === 0) {
            answer += -1 + '\n'
            continue
        }
        answer += queue.popleft() + '\n'
    } else if (command === 'size') {
        answer += queue.size() + '\n'
    } else if (command === 'empty') {
        if (queue.size() === 0) {
            answer += 1 + '\n'
        } else {
            answer += 0 + '\n'
        }
    } else if (command === 'front') {
        if (queue.size() === 0) {
            answer += -1 + '\n'
            continue
        }
        answer += queue.storage[queue.front] + '\n'
    } else if (command === 'back') {
        if (queue.size() === 0) {
            answer += -1 + '\n'
            continue
        }
        answer += queue.storage[queue.rear] + '\n'
    }
}
console.log(answer)