// https://www.acmicpc.net/problem/1920

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, a, m, b] = input
n = +n
a = a.split(' ').map(Number)
m = +m
b = b.split(' ').map(Number)

const dict = {}
for (const x of a) {
    dict[x] = true
}

let answer = ''
for (const y of b) {
    if (dict[y]) {
        answer += 1 + '\n'
    } else {
        answer += 0 + '\n'
    }
}

console.log(answer)