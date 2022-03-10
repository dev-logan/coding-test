// https://www.acmicpc.net/problem/1934

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...tests] = input

function gcd(a, b) {
	const r = a % b
	if (r === 0) return b
	return gcd(b, r)
}

let answer = ''
for (let i = 0; i < +n; i++) {
	let [a, b] = tests[i].split(' ').map((x) => +x)

	if (a < b) {
		;[a, b] = [b, a]
	}

	answer += a * b / gcd(a, b) + '\n'
}

console.log(answer)