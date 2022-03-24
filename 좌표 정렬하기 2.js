// https://www.acmicpc.net/problem/11651

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [_, ...test] = input

console.log(
	test
		.map((x) => x.split(' '))
		.map((x) => x.map((x) => +x))
		.sort((a, b) => {
			if (a[1] < b[1]) return -1
			if (a[1] === b[1]) {
				if (a[0] < b[0]) return -1
			}
		})
		.map((x) => x.join(' '))
		.join('\n')
)
