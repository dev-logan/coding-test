
// https://www.acmicpc.net/problem/10828

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const numCases = +input.shift()

const commands = input
    .map((x) => x.split(' '))
    .map((x) => {
        if (x.length === 2) {
            return [x[0], +x[1]]
        }
        return x
    })

const array = []
const results = []

for (let i = 0; i < numCases; i++) {
    const command = commands[i]
    if (command[0] === 'push') {
        array.push(command[1])
    }
    if (command[0] === 'pop') {
        if (array.length === 0) {
            results.push(-1)
        } else {
            results.push(array.pop())
        }
    }
    if (command[0] === 'size') {
        results.push(array.length)
    }
    if (command[0] === 'empty') {
        if (array.length === 0) {
            results.push(1)
        } else {
            results.push(0)
        }
    }
    if (command[0] === 'top') {
        if (array.length === 0) {
            results.push(-1)
        } else {
            results.push(array[array.length - 1])
        }
    }
}

console.log(results.join('\n'))
