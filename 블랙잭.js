// https://www.acmicpc.net/problem/2798

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, test] = input
const [n, m] = nums.split(' ').map((x) => +x)
const cards = test.split(' ').map((x) => +x)

function getCombinations(arr, selectNumber) {
	if (selectNumber === 1) return arr.map((x) => [x])

	const results = []
	arr.forEach((fixed, index, origin) => {
		const rest = origin.slice(index + 1)
		const combinations = getCombinations(rest, selectNumber - 1)
		const attached = combinations.map((x) => [fixed, ...x])
		results.push(...attached)
	})
	return results
}

const result = getCombinations(cards, 3)
	.map((x) => x.reduce((a, b) => a + b, 0))
	.sort((a, b) => a - b)

console.log(
	result[
		result.findIndex((x) => x > m) === -1
			? result.length - 1
			: result.findIndex((x) => x > m) - 1
	]
)
