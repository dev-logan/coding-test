// https://www.acmicpc.net/problem/1026

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, a, b] = input

n = +n
a = a.split(' ').map(Number)
b = b.split(' ').map(Number)

a.sort((a, b) => a - b)
b.sort((a, b) => b - a)

let s = 0
for (let i = 0; i < n; i++) {
	s += a[i] * b[i]
}

console.log(s)
