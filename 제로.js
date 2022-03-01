// https://www.acmicpc.net/problem/10773

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...commands] = input

let idx = 0
const stack = []
for (let i = 0; i < +n; i++) {
	const command = +commands[idx++]
	if (command !== 0) {
		stack.push(command)
	} else {
		stack.pop()
	}
}
if (stack.length === 0) {
    console.log(0)
} else {
    console.log(stack.reduce((a, b) => a + b))
}
