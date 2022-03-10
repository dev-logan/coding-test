// https://www.acmicpc.net/problem/1003

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const fibo = {}
fibo[-1] = 1
fibo[0] = 0
fibo[1] = 1
for (let i = 2; i <= 40; i++) {
	fibo[i] = fibo[i - 1] + fibo[i - 2]
}

const [n, ...tests] = input
let answer = []
for (let i = 0; i < +n; i++) {
    answer.push(`${fibo[+tests[i] - 1]} ${fibo[+tests[i]]}`)
}
console.log(answer.join('\n'))