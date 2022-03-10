// https://www.acmicpc.net/problem/2231

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const n = +input[0]

const dict = {}
for (let i = 1; i <= 1000000; i++) {
    let n = i
    const stringN = String(n)
    for (let j = 0; j < stringN.length ; j++) {
        n += Number(stringN[j])
    }
    if (dict[n]) {
        if (i < dict[n]) {
            dict[n] = i
        }
    } else {
        dict[n] = i
    }
}
if (dict[n]) {
    console.log(dict[n])
} else {
    console.log(0)
}