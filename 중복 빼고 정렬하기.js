// https://www.acmicpc.net/problem/10867

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, test] = input
n = +n

console.log([...new Set(test.split(' ').map(Number))].sort((a, b) => a - b).join(' '))
