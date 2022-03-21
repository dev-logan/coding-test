// https://www.acmicpc.net/problem/12015

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, test] = input
const array = test.split(' ').map((x) => +x)

const sequence = []

for (let i = 0; i < +n; i++) {
    let low = 0
    let high = sequence.length
    let mid

    while (low < high) {
        mid = Math.floor((low + high) / 2)
        
        if (sequence[mid] >= array[i]) {
            high = mid
        } else {
            low = mid + 1
        }
    }

    sequence[low] = array[i]
}

console.log(sequence.length)