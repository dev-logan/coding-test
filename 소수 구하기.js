// https://www.acmicpc.net/problem/1929

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [m, n] = input[0].split(' ').map(x => +x)

const primes = []
for (let i = 0; i <= 1000000; i++) {
	primes.push(true)
}

primes[0] = false
primes[1] = false

for (let i = 2; i * i <= 1000000; i++) {
	if (primes[i]) {
		for (let j = i * i; j <= 1000000; j += i) {
			primes[j] = false
		}
	}
}

let answer = ''
for (let i = m; i <= n; i++) {
    if (primes[i]) {
        answer += i + '\n'
    }
}

console.log(answer)