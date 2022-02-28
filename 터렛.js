// https://www.acmicpc.net/problem/1002

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...tests] = input

let answer = ''
for (let i = 0; i < +n; i++) {
    const [x1, y1, r1, x2, y2, r2] = tests[i].split(' ').map(x => +x)

    if (x1 === x2 && y1 === y2 && r1 === r2) {
        answer += '-1' + '\n'
        continue
    }

    const d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
    const sum = r1 + r2
    const difference = Math.abs(r1 - r2)

    if (d > sum || d < difference) {
        answer += '0' + '\n'
    } else if (d === sum || d === difference) {
        answer += '1' + '\n'
    } else {
        answer += '2' + '\n'
    }
}

console.log(answer)