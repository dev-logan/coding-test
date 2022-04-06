// https://www.acmicpc.net/problem/2750

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

console.log(
	input
		.slice(1)
		.map(Number)
		.sort((a, b) => a - b)
		.join('\n')
)
