// https://www.acmicpc.net/problem/10815

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, have, m, check] = input
n = +n
have = have.split(' ').map(Number)
m = +m
check = check.split(' ').map(Number)

const dict = {}
for (const card of have) {
    dict[card] = true
}

let answer = ''
for (const num of check) {
    if (dict[num]) {
        answer += 1 + ' '
    } else {
        answer += 0 + ' '
    }
}

console.log(answer)