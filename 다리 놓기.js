// https://www.acmicpc.net/problem/1010

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...tests] = input

const dp = []
for (let i = 0; i < 30; i++) {
    const array = []
	for (let j = 0; j < 30; j++) {
        array.push(0)
	}
	dp.push(array)
}

for (let i = 1; i < 30; i++) {
    dp[i][0] = 1
	dp[i][i] = 1
}

for (let i = 1; i < 30; i++) {
    for (let j = 1; j < i; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
	}
}

let answer = ''
for (let i = 0; i < +n; i++) {
    const [k, n] = tests[i].split(' ').map(x => +x)
    answer += dp[n][k] + '\n'
}

console.log(answer)