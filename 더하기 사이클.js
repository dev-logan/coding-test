// https://www.acmicpc.net/problem/1110

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let n = input[0]
let count = 0
while (true) {
	if (n.length !== 1) {
		n = n[1] + String(+n[0] + +n[1]).slice(-1)
	} else {
		n += n
	}
	count++
	if (+n === +input[0]) break
}
console.log(count)
