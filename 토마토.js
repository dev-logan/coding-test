// https://www.acmicpc.net/problem/7576
// 느낀 점: .shift()는 절대 쓰지 말 것

// const fs = require('fs')
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

// const [nums, ...tomatoes] = input
// const [M, N] = nums.split(' ').map((x) => +x)
// const tomatoMap = tomatoes.map((x) => x.split(' ')).map((x) => x.map((x) => +x))

// const directions = [
// 	[1, 0],
// 	[0, -1],
// 	[-1, 0],
// 	[0, 1],
// ]

// // 1의 좌표 알기
// let newVisit = []

// for (let i = 0; i < N; i++) {
// 	for (let j = 0; j < M; j++) {
// 		if (tomatoMap[i][j] === 1) {
// 			newVisit.push([i, j])
// 		}
// 	}
// }

// let day = 0
// while (newVisit.length) {
// 	toVisit = newVisit.slice()
// 	newVisit = []
// 	let queueIdx = 0
// 	while (queueIdx < toVisit.length) {
// 		const curNode = toVisit[queueIdx++]
// 		for (const direction of directions) {
// 			const newNode = [
// 				curNode[0] + direction[0],
// 				curNode[1] + direction[1],
// 			]
// 			if (
// 				newNode[0] >= 0 &&
// 				newNode[0] < N &&
// 				newNode[1] >= 0 &&
// 				newNode[1] < M &&
// 				tomatoMap[newNode[0]][newNode[1]] === 0
// 			) {
// 				tomatoMap[newNode[0]][newNode[1]] = 1
// 				newVisit.push(newNode)
// 			}
// 		}
// 	}
// 	day++
// }

// let zeroCheck = true
// for (let i = 0; i < N; i++) {
// 	for (let j = 0; j < M; j++) {
// 		if (tomatoMap[i][j] === 0) {
// 			zeroCheck = false
// 			break
// 		}
// 	}
// 	if (!zeroCheck) break
// }
// if (!zeroCheck) console.log(-1)
// else console.log(day - 1)

// 다시 풀이
const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, ...map] = input
const [m, n] = nums.split(' ').map((x) => +x)
const tomato = map.map((x) => x.split(' ')).map((x) => x.map((x) => +x))

const queue = []
let countZero = 0
for (let y = 0; y < n; y++) {
	for (let x = 0; x < m; x++) {
		if (tomato[y][x] === 1) {
			queue.push(y)
			queue.push(x)
			queue.push(0)
		} else if (tomato[y][x] === 0) {
			countZero++
		}
	}
}

const dy = [0, 0, 1, -1]
const dx = [1, -1, 0, 0]

let index = 0
let minDay = 0
while (index < queue.length) {
	const y = queue[index++]
	const x = queue[index++]
	const day = queue[index++]

	for (let i = 0; i < 4; i++) {
		const new_y = y + dy[i]
		const new_x = x + dx[i]

		if (
			new_y < 0 ||
			new_y >= n ||
			new_x < 0 ||
			new_x >= m ||
			tomato[new_y][new_x] !== 0
		)
			continue

		tomato[new_y][new_x] = 1

		queue.push(new_y)
		queue.push(new_x)
		queue.push(day + 1)

		minDay = minDay < day + 1 ? day + 1 : minDay

		countZero--
	}
}
console.log(countZero === 0 ? minDay : -1)