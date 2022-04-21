// https://www.acmicpc.net/problem/1181

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, ...test] = input
n = +n

console.log(
	[...new Set(test)]
		.sort((a, b) => {
			if (a.length < b.length) {
				return -1
			} else if (a.length === b.length) {
				if (a < b) {
					return -1
				}
			}
		})
		.join('\n')
)
