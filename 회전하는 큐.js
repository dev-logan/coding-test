// https://www.acmicpc.net/problem/1021

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, tests] = input
const [n, m] = nums.split(' ').map((x) => +x)
const targets = tests.split(' ').map((x) => +x)

const array = []
for (let i = 1; i <= n; i++) {
	array.push(i)
}

let count = 0
for (let i = 0; i < m; i++) {
	const target = targets[i]
	const index = array.findIndex((x) => x === target)
    const back = array.length - index
    if (index <= back) {
        count += index
        for (let j = 0; j < index; j++) {
            array.push(array.shift())
        }
        array.shift()
    } else {
        count += back
        for (let j = 0; j < back; j++) {
            array.unshift(array.pop())
        }
        array.shift()
    }
}

console.log(count)