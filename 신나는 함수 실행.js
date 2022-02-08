// https://www.acmicpc.net/problem/9184


const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const memory = []

const w = (a, b, c) => {
    const [findMemory] = memory.filter((x) => {
        return x[0] === a && x[1] === b && x[2] === c
    })

    let toPush
    if (findMemory) {
        return findMemory[3]
    } else {
        if (a <= 0 || b <= 0 || c <= 0) {
            toPush = 1
            memory.push([a, b, c, toPush])
            return toPush
        } else if (a > 20 || b > 20 || c > 20) {
            toPush = w(20, 20, 20)
            memory.push([a, b, c, toPush])
            return toPush
        } else if (a < b && b < c) {
            toPush = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c)
            memory.push([a, b, c, toPush])
            return toPush
        } else {
            toPush =
                w(a - 1, b, c) +
                w(a - 1, b - 1, c) +
                w(a - 1, b, c - 1) -
                w(a - 1, b - 1, c - 1)
            memory.push([a, b, c, toPush])
            return toPush
        }
    }
}

input.pop()
const testCases = input.map((x) => x.split(' ')).map((x) => x.map((x) => +x))

let answer = ''
for (const testCase of testCases) {
    const [a, b, c] = testCase
    answer += `w(${a}, ${b}, ${c}) = ${w(a, b, c)}\n`
}

console.log(answer)
