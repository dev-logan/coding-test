// https://www.acmicpc.net/problem/11050

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

function factorial(n) {
	if (n === 0) return 1
	return n * factorial(n - 1)
}

const [n, k] = input[0].split(' ').map(x => +x)

console.log(factorial(n) / factorial(n - k) / factorial(k))