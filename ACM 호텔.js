// https://www.acmicpc.net/problem/10250

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...tests] = input

let answer = ''
for (let i = 0; i < +n; i++) {
	const [floor, room, order] = tests[i].split(' ').map((x) => +x)
	const front = String(order % floor !== 0 ? order % floor : floor)
	const back = String(
		order % floor !== 0
			? Math.floor(order / floor) + 1
			: Math.floor(order / floor)
	)
	answer += `${front}${back.length === 1 ? '0' + back : back}\n`
}
console.log(answer)
