// https://www.acmicpc.net/problem/9012

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...tests] = input

let answer = ''
for (let i = 0; i < +n; i++) {
	const array = tests[i].split('')
	const stack = []
	while (array.length) {
        if (stack[stack.length - 1] === ')' && array[array.length - 1] === '(') {
            stack.pop()
            array.pop()
        } else {
			stack.push(array.pop())
		}
	}
    if (stack.length === 0) {
        answer += 'YES\n'
    } else {
        answer += 'NO\n'
    }
}
console.log(answer)