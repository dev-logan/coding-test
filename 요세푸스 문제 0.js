// https://www.acmicpc.net/problem/11866

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map((x) => +x)

let array = []
for (let i = 1; i <= n; i++) {
	array.push(i)
}

let index = k - 1
let answer = '<'
while (array.length) {
	index = index % array.length
	answer += array[index] + ', '
	array = array.filter((x) => x !== array[index])
	index += k - 1
}
console.log(answer.substring(0, answer.length - 2) + '>')
