// https://www.acmicpc.net/problem/2579

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...tests] = input
const score = tests.map((x) => +x)

const dp = new Array(+n).fill(0)

dp[0] = score[0]
dp[1] = score[0] + score[1]
dp[2] = Math.max(score[0] + score[2], score[1] + score[2])

for (let i = 3; i < +n; i++) {
	dp[i] = Math.max(dp[i - 3] + score[i - 1] + score[i], dp[i - 2] + score[i])
}

console.log(dp[+n - 1])