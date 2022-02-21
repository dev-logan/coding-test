// https://www.acmicpc.net/problem/7576
// 느낀 점: .shift()는 절대 쓰지 말 것

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, ...tomatoes] = input
const [M, N] = nums.split(' ').map((x) => +x)
const tomatoMap = tomatoes.map((x) => x.split(' ')).map((x) => x.map((x) => +x))

const directions = [
	[1, 0],
	[0, -1],
	[-1, 0],
	[0, 1],
]

// 1의 좌표 알기
let newVisit = []

for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (tomatoMap[i][j] === 1) {
			newVisit.push([i, j])
		}
	}
}

let day = 0
while (newVisit.length) {
	toVisit = newVisit.slice()
	newVisit = []
	let queueIdx = 0
	while (queueIdx < toVisit.length) {
		const curNode = toVisit[queueIdx++]
		for (const direction of directions) {
			const newNode = [
				curNode[0] + direction[0],
				curNode[1] + direction[1],
			]
			if (
				newNode[0] >= 0 &&
				newNode[0] < N &&
				newNode[1] >= 0 &&
				newNode[1] < M &&
				tomatoMap[newNode[0]][newNode[1]] === 0
			) {
				tomatoMap[newNode[0]][newNode[1]] = 1
				newVisit.push(newNode)
			}
		}
	}
	day++
}

let zeroCheck = true
for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (tomatoMap[i][j] === 0) {
			zeroCheck = false
			break
		}
	}
	if (!zeroCheck) break
}
if (!zeroCheck) console.log(-1)
else console.log(day - 1)