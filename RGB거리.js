// https://www.acmicpc.net/problem/1149

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [num, ...tests] = input

const n = +num
const houses = tests.map((x) => x.split(' ')).map((x) => x.map((x) => +x))

const p = []
for (let i = 0; i < n; i++) {
	const arrayOne = []
	for (let j = 0; j < 3; j++) {
		arrayOne.push(null)
	}
	p.push(arrayOne)
}

const list = [0, 1, 2]
for (let i = 0; i < n; i++) {
	for (let j = 0; j < 3; j++) {
		if (i === 0) {
			p[i][j] = houses[i][j]
			continue
		}
		const rest = list.filter((x) => x !== j)
		let min = 100000
		rest.forEach((num) => {
			if (p[i - 1][num] < min) {
				min = p[i - 1][num]
			}
		})
		p[i][j] = min + houses[i][j]
	}
}
console.log(Math.min(...p[n - 1]))
