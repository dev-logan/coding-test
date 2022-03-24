// https://www.acmicpc.net/problem/2108

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, ...test] = input
n = +n
test = test.map((x) => +x)

// 산술평균
const mean = Math.round(test.reduce((a, b) => a + b, 0) / n)
console.log(mean === -0 ? 0 : mean)

// 중앙값
let median
test.sort((a, b) => a - b)
if (test.length % 2 === 0) {
	median = (test[test.length / 2] + test[test.length / 2 - 1]) / 2
} else {
	median = test[Math.floor(test.length / 2)]
}
console.log(median)

// 최빈값
const count = {}
for (const num of test) {
	count[num] ? count[num]++ : (count[num] = 1)
}
const array = Object.entries(count)
	.map((x) => [+x[0], x[1]])
	.sort((a, b) => {
		if (a[1] > b[1]) return -1
		if (a[1] === b[1]) {
			if (a[0] < b[0]) return -1
		}
	})
	.filter((element, _, array) => {
		return element[1] === array[0][1]
	})

let mode
if (array.length === 1) {
	mode = array[0][0]
} else {
	mode = array[1][0]
}

console.log(mode)

// 범위
console.log(test[test.length - 1] - test[0])
