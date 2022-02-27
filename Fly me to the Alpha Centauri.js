// https://www.acmicpc.net/problem/1011

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [num, ...testCases] = input

for (let i = 0; i < +num; i++) {
	const [start, end] = testCases[i].split(' ').map((x) => +x)
	let distance = end - start
	let k = 1
	let count = 0
	while (distance > k * 2) {
		distance -= k * 2
        k++
        count += 2
	}
    if (distance <= k) {
        console.log(count + 1)
    } else {
        console.log(count + 2)
    }
}
