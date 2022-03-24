// https://www.acmicpc.net/problem/11729

// const fs = require('fs')
// const input = fs.readFileSync('dev/stdin').toString()

// const n = input

// const actions = []
// function hanoi(n, from, to, other) {
//     if (n === 0) return
//     hanoi(n - 1, from, other, to)
//     actions.push(`${from} ${to}`)
//     hanoi(n - 1, other, to, from)
// }

// hanoi(n, 1, 3, 2)
// console.log(actions.length)
// console.log(actions.join('\n'))

// 다시 풀이
const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString()

let count = 0
let answer = ''
function hanoi(n, start, target, other) {
	if (n === 0) return
	hanoi(n - 1, start, other, target)
	answer += `${start} ${target}\n`
	count++
	hanoi(n - 1, other, target, start)
}

hanoi(+input, 1, 3, 2)
console.log(count)
console.log(answer)
