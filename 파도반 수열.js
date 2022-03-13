// https://www.acmicpc.net/problem/9461

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const p = []
p[0] = 0
p[1] = 1
p[2] = 1
p[3] = 1
p[4] = 2
p[5] = 2

for (let i = 6; i <= 100; i++) {
	p[i] = p[i - 5] + p[i - 1]
}

const [n, ...tests] = input

let answer = ''
for (let i = 0; i < +n; i++) {
	answer += p[+tests[i]] + '\n'
}

console.log(answer)
