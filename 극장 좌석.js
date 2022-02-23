// https://www.acmicpc.net/problem/2302

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [count, num, ...vip] = input.map((x) => +x)

const fibo_memo = {
	0: 1,
	1: 1,
	2: 2,
}

for (let i = 3; i <= count; i++) {
	fibo_memo[i] = fibo_memo[i - 1] + fibo_memo[i - 2]
}

if (num === 0) {
	console.log(fibo_memo[count])
	return
}

const seatGroups = [vip[0] - 1, count - vip[vip.length - 1]]
for (let i = 1; i < vip.length; i++) {
	seatGroups.push(vip[i] - vip[i - 1] - 1)
}

console.log(seatGroups.reduce((acc, value) => acc * fibo_memo[value], 1))
