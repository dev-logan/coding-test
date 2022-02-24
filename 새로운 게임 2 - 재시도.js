/*

colorMap = [[0 0 2 0],
            [0 0 1 0],
            [0 0 1 2],
            [0 2 0 0]]

unitMap = [[[],[],[],[]],
           [[0],[2],[],[]],
           [[],[1],[],[]],
           [[3],[],[],[]]]

오른쪽, 왼쪽, 위쪽, 아래쪽
dr = [0, 0, -1, 1]
dc = [1, -1, 0, 0]

0, 1, 2, 3 계속 반복하는 반복문
이동하려는 칸을 확인
if 이동하려는 칸이 체스판을 벗어나거나 파란색이면
	말의 이동 방향을 반대로 함
	if 다시 이동하려는 칸이 체스판을 벗어나거나 파란색이면
		continue
	if 다시 이동하려는 칸이 빨간색이면
		빨간색 함수 실행
	if 다시 이동하려는 칸이 흰색이면
		흰색 함수 실행
if 이동하려는 칸이 빨간색이면
	빨간색 함수 실행
if 이동하려는 칸이 흰색이면
	흰색 함수 실행

*/

function white(nextLocationR, nextLocationC, arrayToMove, curLocationR) {
	// 이동할 칸의 array
	const nextArray = unitMap[nextLocationR][nextLocationC]
	const newArray = nextArray.concat(arrayToMove)
	unitMap[nextLocationR][nextLocationC] = newArray
	unitMap[curLocationR][curLocationC] = arrayToRemain
	unitLocationR[index] = nextLocationR
	unitLocationC[index] = nextLocationC
}

function red(nextLocationR, nextLocationC, arrayToMove) {
	const nextArray = unitMap[nextLocationR][nextLocationC]
	const newArray = nextArray.concat(arrayToMove.reverse())
	unitMap[nextLocationR][nextLocationC] = newArray
	unitMap[curLocationR][curLocationC] = arrayToRemain
	unitLocationR[index] = nextLocationR
	unitLocationC[index] = nextLocationC
}

function blue() {
	if (unitDirections[index] === 0) {
		unitDirections[index] = 1
	} else if (unitDirections[index] === 1) {
		unitDirections[index] = 0
	} else if (unitDirections[index] === 2) {
		unitDirections[index] = 3
	} else {
		unitDirections[index] = 2
	}

	const curDirectionR = dr[unitDirections[index]]
	const curDirectionC = dc[unitDirections[index]]

	const nextLocationR = curLocationR + curDirectionR
	const nextLocationC = curLocationC + curDirectionC

	if (
		nextLocationR < 0 ||
		nextLocationR >= numRows ||
		nextLocationC < 0 ||
		nextLocationC >= numColumns
	) {
		return
	}

	if (colorMap[nextLocationR][nextLocationC] === 2) {
		return
	}

	if (colorMap[nextLocationR][nextLocationC] === 1) {
		red(nextLocationR, nextLocationC, arrayToMove)
	}

	if (colorMap[nextLocationR][nextLocationC] === 0) {
		white(nextLocationR, nextLocationC, arrayToMove)
	}
}

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, ...colorAndUnits] = input

const [numRows, numColumns] = nums.split(' ').map((x) => +x)

const colorMap = colorAndUnits
	.slice(0, numRows)
	.map((x) => x.split(' ').map((x) => +x))
const units = colorAndUnits
	.slice(numRows)
	.map((x) => x.split(' ').map((x) => +x))

const unitMap = []
for (let i = 0; i < numColumns; i++) {
	const column = []
	for (let j = 0; j < numRows; j++) {
		column.push([])
	}
	unitMap.push(column)
}

const unitDirections = []
const unitLocationR = []
const unitLocationC = []

for (let i = 0; i < units.length; i++) {
	const unit = units[i]
	unitMap[unit[0] - 1][unit[1] - 1].push(i)
	unitDirections.push(unit[2] - 1)
	unitLocationR.push(unit[0] - 1)
	unitLocationC.push(unit[1] - 1)
}

const dr = [0, 0, -1, 1]
const dc = [1, -1, 0, 0]

let turn = 0
let count = 0
while (true) {
	count++
	let index = turn++ % units.length

	// 이동하려는 칸을 확인
	// 현재 내 위치
	const curLocationR = unitLocationR[index]
	const curLocationC = unitLocationC[index]
	// 현재 내 방향
	const curDirectionR = dr[unitDirections[index]]
	const curDirectionC = dc[unitDirections[index]]
	// 이동하고자 하는 칸의 좌표
	const nextLocationR = curLocationR + curDirectionR
	const nextLocationC = curLocationC + curDirectionC
	// 현재 내 array
	const curArray = unitMap[curLocationR][curLocationC]
	// 잘라야하는 부분의 index
	const indexToCut = curArray.findIndex((x) => x === index)
	// array 나누기
	const arrayToRemain = curArray.slice(0, indexToCut)
	const arrayToMove = curArray.slice[indexToCut]

	// 이동하려는 칸이 체스판을 벗어나면
	if (
		nextLocationR < 0 ||
		nextLocationR >= numRows ||
		nextLocationC < 0 ||
		nextLocationC >= numColumns
	) {
		if (unitDirections[index] === 0) {
			unitDirections[index] = 1
		} else if (unitDirections[index] === 1) {
			unitDirections[index] = 0
		} else if (unitDirections[index] === 2) {
			unitDirections[index] = 3
		} else {
			unitDirections[index] = 2
		}

		const curDirectionR = dr[unitDirections[index]]
		const curDirectionC = dc[unitDirections[index]]

		const nextLocationR = curLocationR + curDirectionR
		const nextLocationC = curLocationC + curDirectionC

		if (
			nextLocationR < 0 ||
			nextLocationR >= numRows ||
			nextLocationC < 0 ||
			nextLocationC >= numColumns
		) {
			return
		}

		if (colorMap[nextLocationR][nextLocationC] === 2) {
			return
		}

		if (colorMap[nextLocationR][nextLocationC] === 1) {
			const nextArray = unitMap[nextLocationR][nextLocationC]
			const newArray = nextArray.concat(arrayToMove.reverse())
			unitMap[nextLocationR][nextLocationC] = newArray
			unitMap[curLocationR][curLocationC] = arrayToRemain
			unitLocationR[index] = nextLocationR
			unitLocationC[index] = nextLocationC
		}

		if (colorMap[nextLocationR][nextLocationC] === 0) {
			const nextArray = unitMap[nextLocationR][nextLocationC]
			const newArray = nextArray.concat(arrayToMove)
			unitMap[nextLocationR][nextLocationC] = newArray
			unitMap[curLocationR][curLocationC] = arrayToRemain
			unitLocationR[index] = nextLocationR
			unitLocationC[index] = nextLocationC
		}
		if (unitMap[unitLocationR[index]][unitLocationC[index]].length >= 4)
			break
		continue
	}

	if (colorMap[nextLocationR][nextLocationC] === 2) {
		if (unitDirections[index] === 0) {
			unitDirections[index] = 1
		} else if (unitDirections[index] === 1) {
			unitDirections[index] = 0
		} else if (unitDirections[index] === 2) {
			unitDirections[index] = 3
		} else {
			unitDirections[index] = 2
		}

		const curDirectionR = dr[unitDirections[index]]
		const curDirectionC = dc[unitDirections[index]]

		const nextLocationR = curLocationR + curDirectionR
		const nextLocationC = curLocationC + curDirectionC

		if (
			nextLocationR < 0 ||
			nextLocationR >= numRows ||
			nextLocationC < 0 ||
			nextLocationC >= numColumns
		) {
			return
		}

		if (colorMap[nextLocationR][nextLocationC] === 2) {
			return
		}

		if (colorMap[nextLocationR][nextLocationC] === 1) {
			const nextArray = unitMap[nextLocationR][nextLocationC]
			const newArray = nextArray.concat(arrayToMove.reverse())
			unitMap[nextLocationR][nextLocationC] = newArray
			unitMap[curLocationR][curLocationC] = arrayToRemain
			unitLocationR[index] = nextLocationR
			unitLocationC[index] = nextLocationC
		}

		if (colorMap[nextLocationR][nextLocationC] === 0) {
			const nextArray = unitMap[nextLocationR][nextLocationC]
			const newArray = nextArray.concat(arrayToMove)
			unitMap[nextLocationR][nextLocationC] = newArray
			unitMap[curLocationR][curLocationC] = arrayToRemain
			unitLocationR[index] = nextLocationR
			unitLocationC[index] = nextLocationC
		}
		if (unitMap[unitLocationR[index]][unitLocationC[index]].length >= 4)
			break
		continue
	}

	if (colorMap[nextLocationR][nextLocationC] === 1) {
		const nextArray = unitMap[nextLocationR][nextLocationC]
		const newArray = nextArray.concat(arrayToMove.reverse())
		unitMap[nextLocationR][nextLocationC] = newArray
		unitMap[curLocationR][curLocationC] = arrayToRemain
		unitLocationR[index] = nextLocationR
		unitLocationC[index] = nextLocationC
		if (unitMap[unitLocationR[index]][unitLocationC[index]].length >= 4)
			break
		continue
	}

	if (colorMap[nextLocationR][nextLocationC] === 0) {
		const nextArray = unitMap[nextLocationR][nextLocationC]
		const newArray = nextArray.concat(arrayToMove)
		unitMap[nextLocationR][nextLocationC] = newArray
		unitMap[curLocationR][curLocationC] = arrayToRemain
		unitLocationR[index] = nextLocationR
		unitLocationC[index] = nextLocationC
		if (unitMap[unitLocationR[index]][unitLocationC[index]].length >= 4)
			break
		continue
	}
}

console.log(count)
