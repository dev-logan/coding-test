const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, ...test] = input
const [n, m] = nums.split(' ').map(Number)
const prices = test.map((x) => x.split(' ').map(Number))

const counts = []
for (let i = 0; i < n; i++) {
	const set = JSON.parse(JSON.stringify(prices))
	set[i][0] /= 2
	const sortSet = set.map((x) => x[0] + x[1]).sort((a, b) => a - b)
    let sum = 0
    let count = 0
	for (let j = 0; j < n; j++) {
        sum += sortSet[j]
        if (sum > m) break
        count++
    }
    counts.push(count)
}

console.log(Math.max(...counts))