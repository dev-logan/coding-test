function adjacentZero(i, j, tomatoMap, N, M) {
	if (i + 1 < N && tomatoMap[i + 1][j] === 0) tomatoMap[i + 1][j] = 2
	if (i - 1 >= 0 && tomatoMap[i - 1][j] === 0) tomatoMap[i - 1][j] = 2
	if (j + 1 < M && tomatoMap[i][j + 1] === 0) tomatoMap[i][j + 1] = 2
	if (j - 1 >= 0 && tomatoMap[i][j - 1] === 0) tomatoMap[i][j - 1] = 2
}

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, ...tomatoes] = input
const [M, N] = nums.split(' ').map((x) => +x)
const tomatoMap = tomatoes.map((x) => x.split(' ')).map((x) => x.map((x) => +x))

// 0이 하나도 없으면 0 출력 후 끝냄
let nonZeroCheck = false
for (i = 0; i < N; i++) {
	for (j = 0; j < M; j++) {
		if (tomatoMap[i][j] === 0) {
			nonZeroCheck = true
			break
		}
	}
	if (nonZeroCheck === true) break
}
if (nonZeroCheck === false) {
	console.log(0)
} else {
	let day = 0
	while (true) {
		const curTomatoMap = tomatoMap.map((arr) => arr.slice()) //  복제

		for (i = 0; i < N; i++) {
			for (j = 0; j < M; j++) {
				if (tomatoMap[i][j] === 1) {
					// 인접한 0을 2로 바꾸는 함수
					adjacentZero(i, j, tomatoMap, N, M)
				}
			}
		}

		for (i = 0; i < N; i++) {
			for (j = 0; j < M; j++) {
				if (tomatoMap[i][j] === 2) {
					tomatoMap[i][j] = 1
				}
			}
		}
		day++
		// console.log('curTomatoMap', day, curTomatoMap)
		// console.log('tomatoMap', day, tomatoMap)
		let finishCheck = true
		let zeroCheck = false
		for (i = 0; i < N; i++) {
			for (j = 0; j < M; j++) {
				if (curTomatoMap[i][j] !== tomatoMap[i][j]) {
					finishCheck = false
					break
				}
				if (tomatoMap[i][j] === 0) {
					zeroCheck = true
				}
			}
			if (finishCheck === false) break
		}
		if (finishCheck === true) {
			if (zeroCheck === true) {
				console.log(-1)
				break
			} else {
				console.log(day - 1)
				break
			}
		}
	}
}
