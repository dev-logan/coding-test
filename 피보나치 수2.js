// https://www.acmicpc.net/problem/2747

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const n = +input[0]

const fibo = {}

fibo[0] = 0
fibo[1] = 1

for (let i = 2; i <= 90; i++) {
	fibo[i] = BigInt(fibo[i - 1]) + BigInt(fibo[i - 2])
}

console.log(fibo[n].toString())