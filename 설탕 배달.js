// https://www.acmicpc.net/problem/2839

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const num = +input[0]

let answer
for (let i = Math.floor(num / 5); i >= 0; i--) {
    if ((num - i * 5) % 3 === 0) {
        answer = i + (num - i * 5) / 3
        break
    }
}
if (answer) {
    console.log(answer)
} else {
    console.log(-1)
}
