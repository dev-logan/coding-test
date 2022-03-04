// https://www.acmicpc.net/problem/4949

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('.\n')

const arrays = input
	.slice(0, input.length - 1)
	.map((x) => x.split(''))
	.map((x) =>
		x.filter((x) => x === '(' || x === ')' || x === '[' || x === ']')
	)

let answer = ''
for (const array of arrays) {
	const stack = []
	while (array.length) {
		if (
			stack[stack.length - 1] === ')' &&
			array[array.length - 1] === '('
		) {
			stack.pop()
			array.pop()
		} else if (
			stack[stack.length - 1] === ']' &&
			array[array.length - 1] === '['
		) {
			stack.pop()
			array.pop()
		} else {
			stack.push(array.pop())
		}
	}
    if (stack.length === 0) {
        answer += 'yes\n'
    } else {
        answer += 'no\n'
    }
}
console.log(answer)