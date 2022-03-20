// https://www.acmicpc.net/problem/1300

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, k] = input.map((x) => +x)

let min = 1
let max = k
let x

while (min <= max) {
	let mid = Math.floor((min + max) / 2)

	let cnt = 0
	for (let i = 1; i <= n; i++) {
		cnt += Math.min(Math.floor(mid / i), n)
	}

	if (cnt >= k) {
		x = mid
		max = mid - 1
	} else {
		min = mid + 1
	}
}

console.log(x)
