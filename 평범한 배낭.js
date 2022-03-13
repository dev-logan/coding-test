// https://www.acmicpc.net/problem/12865

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, ...tests] = input
const [n, k] = nums.split(' ').map((x) => +x)

const knapsack = []
for (let i = 0; i <= n; i++) {
	const array = []
	for (let j = 0; j <= k; j++) {
		array.push(0)
	}
	knapsack.push(array)
}

const stuff = tests.map((x) => x.split(' ')).map((x) => x.map((x) => +x))
stuff.unshift(null)

for (let i = 0; i <= n; i++) {
	for (let w = 0; w <= k; w++) {
		if (i === 0 || w === 0) {
			knapsack[i][w] = 0
		} else if (stuff[i][0] > w) {
			knapsack[i][w] = knapsack[i - 1][w]
		} else {
			knapsack[i][w] = Math.max(
				stuff[i][1] + knapsack[i - 1][w - stuff[i][0]],
				knapsack[i - 1][w]
			)
		}
	}
}

console.log(knapsack[n][k])
