// https://www.acmicpc.net/problem/11650

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, ...test] = input
n = +n

console.log(
	test
		.map((x) => x.split(' ').map(Number))
		.sort((a, b) => {
			if (a[0] < b[0]) {
				return -1
			} else if (a[0] === b[0]) {
				if (a[1] < b[1]) {
					return -1
				}
			}
		})
		.map((x) => x.join(' '))
		.join('\n')
)
