// https://www.acmicpc.net/problem/11497


const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const numCases = +input.shift()

const cases = []
for (let i = 0; i < numCases; i++) {
    cases.push(input[2 * i + 1])
}

const testCases = cases.map(x => x.split(' ')).map(x => x.map(x => +x))

for (const testCase of testCases) {
    testCase.sort((a,b) => a-b)
    const logs = []
    for (let i = 0; i < testCase.length; i++) {
        let log = testCase[i]
        if (i % 2 === 0) {
            logs.push(log)
        } else {
            logs.unshift(log)
        }
    }
    const differences = []
    for (let i = 0; i < logs.length; i++) {
        if (i === logs.length - 1) {
            differences.push(Math.abs(logs[i] - logs[0]))
        } else {
            differences.push(Math.abs(logs[i] - logs[i + 1]))
        }
    }
    console.log(Math.max(...differences))
}
