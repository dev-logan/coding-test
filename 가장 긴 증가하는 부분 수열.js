// https://www.acmicpc.net/problem/11053

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, test] = input

const list = test.split(' ').map((x) => +x)
const dp = []
for (let i = 0; i < +n; i++) {
	dp.push(1)
}

for (let i = 1; i < +n; i++) {
	let max = 0
	for (let j = 0; j < i; j++) {
		if (list[j] < list[i]) {
			if (dp[j] > max) {
				max = dp[j]
			}
		}
	}
	dp[i] = max + 1
}

console.log(Math.max(...dp))
