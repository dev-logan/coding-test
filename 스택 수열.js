// https://www.acmicpc.net/problem/1874

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...tests] = input

const queue = []
for (let i = +n; i > 0; i--) {
    queue.push(i)
}

const stack = []
let answer = ''
for (let i = 0; i < +n; i++) {
    const target = +tests[i]
    if (stack[stack.length - 1] === target) {
        stack.pop()
        answer += '-\n'
        continue
    }
    while (stack[stack.length - 1] !== target && queue.length) {
        stack.push(queue.pop())
        answer += '+\n'
    }
    if (stack[stack.length - 1] !== target) return console.log('NO')
    stack.pop()
    answer += '-\n'
}

console.log(answer)