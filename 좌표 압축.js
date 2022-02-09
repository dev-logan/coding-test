// https://www.acmicpc.net/problem/18870

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const notSorted = input[1].split(' ').map((x) => +x)
const sorted = Array.from(new Set(notSorted))
    .sort((a, b) => a - b)
    .reduce((dict, value, index) => {
        dict[value] = index
        return dict
    }, {})

answer = []
for (const num of notSorted) {
    answer.push(sorted[num])
}

console.log(answer.join(' '))
