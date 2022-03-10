// https://www.acmicpc.net/problem/1541

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const groups = input[0].split('-').map((x) => x.split('+'))

let answer = 0
for (let i = 0; i < groups.length; i++) {
	const subSum = groups[i].map((x) => +x).reduce((a, b) => a + b, 0)
    if (i === 0) {
        answer += subSum
    } else {
        answer -= subSum
    }
}
console.log(answer)