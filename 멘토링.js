const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, ...test] = input
const [n, m] = nums.split(' ').map(Number)
const ranks = test.map((x) => x.split(' ').map(Number))

let count = 0
for (let i = 1; i <= n; i++) {
	for (let j = 1; j <= n; j++) {
        if (i === j) continue
        let judge = false
        for (const rank of ranks) {
            if (rank.indexOf(i) > rank.indexOf(j)) {
                judge = true
                break
            }
        }
        if (judge) continue
        count++
    }
}

console.log(count)