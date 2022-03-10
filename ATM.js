// https://www.acmicpc.net/problem/11399

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, p] = input

const sortedP = p
	.split(' ')
	.map((x) => +x)
	.sort((a, b) => a - b)

let answer = 0
for (let i = 0; i < +n; i++) {
	answer += sortedP.slice(0, i + 1).reduce((a, b) => a + b, 0)
}
console.log(answer)
