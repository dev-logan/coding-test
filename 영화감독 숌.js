// https://www.acmicpc.net/problem/1436

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const list = []

let i = 1
while (list.length < 10000) {
    if (String(i).includes('666')) {
        list.push(i)
    }
    i++
}

console.log(list[+input[0] - 1])