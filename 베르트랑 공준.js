// https://www.acmicpc.net/problem/4948

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

// 에라토스테네스의 체

const primes = []
for (let i = 0; i <= 123456 * 2; i++) {
	primes.push(true)
}

primes[0] = false
primes[1] = false

for (let i = 2; i * i <= 123456 * 2; i++) {
	if (primes[i]) {
		for (let j = i * i; j <= 123456 * 2; j += i) {
			primes[j] = false
		}
	}
}

let idx = 0
let answer = ''
while (input[idx] !== '0') {
	const n = +input[idx++]
	answer += `${primes.slice(n + 1, 2 * n + 1).filter((x) => x === true).length}\n`
}
console.log(answer)
