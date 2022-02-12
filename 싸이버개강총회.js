// https://www.acmicpc.net/problem/19583


const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [timesString, ...logsString] = input

const times = timesString
    .split(' ')
    .map((x) => x.split(':'))
    .map((x) => x.map((x) => +x))
    .map((x) => {
        return x[0] * 60 + x[1]
    })

const logs = logsString
    .map((x) => x.split(' '))
    .map((x) => {
        const hourMinute = x[0].split(':').map((x) => +x)
        const minutes = hourMinute[0] * 60 + hourMinute[1]
        return [minutes, x[1]]
    })

const before = logs.filter((x) => {
    return x[0] <= times[0]
})

const after = logs.filter((x) => {
    return x[0] >= times[1] && x[0] <= times[2]
})

const dict = {}
let count = 0
for (const log of before) {
    dict[log[1]] = true
}
for (const log of after) {
    if (dict[log[1]]) {
        delete dict[log[1]]
        count++
    }
}

console.log(count)
