// https://www.acmicpc.net/problem/1932

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [num, ...tests] = input
const n = +num
const triangle = tests.map((x) => x.split(' ')).map((x) => x.map((x) => +x))

const p = []
for (let i = 0; i < n; i++) {
	const array = []
	for (let j = 0; j <= i; j++) {
		array.push(null)
	}
	p.push(array)
}

p[0][0] = triangle[0][0]

for (let i = 1; i < n; i++) {
	for (let j = 0; j <= i; j++) {
		if (j === 0) {
			p[i][j] = p[i - 1][j] + triangle[i][j]
		} else if (j === i) {
			p[i][j] = p[i - 1][j - 1] + triangle[i][j]
		} else {
			p[i][j] = Math.max(p[i - 1][j - 1], p[i - 1][j]) + triangle[i][j]
		}
	}
}

console.log(Math.max(...p[n - 1]))
