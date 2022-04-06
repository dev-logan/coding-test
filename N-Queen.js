// https://www.acmicpc.net/problem/9663

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const n = +input[0]

const columns = []
for (let i = 0; i < n; i++) {
	columns.push(0)
}

const check = (x) => {
	for (let c = 0; c < x; c++) {
		if (columns[c] === columns[x]) {
			return false
		}
		if (Math.abs(c - x) === Math.abs(columns[c] - columns[x])) {
			return false
		}
	}
	return true
}

let count = 0
const nqueen = (x) => {
	if (x === n) {
		count++
		return
	}

	for (let y = 0; y < n; y++) {
		columns[x] = y
		if (check(x)) {
			nqueen(x + 1)
		}
	}
}

nqueen(0)
console.log(count)
