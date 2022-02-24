// colorMap = [[0 0 2 0],
//             [0 0 1 0],
//             [0 0 1 2],
//             [0 2 0 0]]

// unitMap = [[[],[],[],[]],
//             [[],[],[C],[A]],
//             [[],[],[B],[]],
//             [[D],[],[],[]]]

// unitDirections = [오른쪽, 아래쪽, 왼쪽, 왼쪽]
// 각각 A, B, C, D의 방향을 가리킴

// horizontalDirections = [[0,1],[0,-1]]
// verticalDirections = [[1,0],[-1,0]]

// A, B, C, D 움직임을 계속 반복하는 반복문
// 해당 알파벳부터 array를 자름
// 나아가고자 하는 방향칸을 확인
// i) color가 1이면
//     자른 array의 순서를 바꿈
//     나아가고자 하는 칸에 push
// ii) color가 2이면
//     나아가고자 했던 방향을 반대로 바꿈
//     if 바꾼 방향의 칸의 color가 2이면 행동 멈춤
//     else 바꾼 방향의 칸에 push
// iii) color가 0이면
//     나아가고자 하는 칸에 자른 array를 push
// 만약 push한 칸의 원소가 4개 이상이 되면 break

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, ...colorAndUnits] = input

const [numRows, numUnits] = nums.split(' ').map((x) => +x)

const colorMap = colorAndUnits
	.slice(0, numRows)
	.map((x) => x.split(' ').map((x) => +x))
const units = colorAndUnits
	.slice(numRows)
	.map((x) => x.split(' ').map((x) => +x))

const unitMap = []
for (let i = 0; i < numRows; i++) {
	const column = []
	for (let j = 0; j < numRows; j++) {
		column.push([])
	}
	unitMap.push(column)
}

const unitDirections = []
const unitLocations = []
const unitNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const actualUnitNames = []
const directions = [
	[0, 1],
	[0, -1],
	[-1, 0],
	[1, 0],
]

for (let i = 0; i < units.length; i++) {
	const unit = units[i]
	unitMap[unit[0] - 1][unit[1] - 1].push(unitNames[i])
	actualUnitNames.push(unitNames[i])
	unitDirections.push(directions[unit[2] - 1])
	unitLocations.push([unit[0] - 1, unit[1] - 1])
}

let index = 0
let count = 0
while (true) {
	count++
	if (count > 1000) break
	const turn = index++ % actualUnitNames.length
	const turnUnit = actualUnitNames[turn]
	const turnDirection = unitDirections[turn]

	const arrayInMap = unitMap[unitLocations[turn][0]][unitLocations[turn][1]]

	const toCutIndex = arrayInMap.findIndex((x) => x === turnUnit)

	const arrayToRemain = arrayInMap.slice(0, toCutIndex)
	const arrayToMove = arrayInMap.slice(toCutIndex)

	const nextLocation = [
		unitLocations[turn][0] + unitDirections[turn][0],
		unitLocations[turn][1] + unitDirections[turn][1],
	]

	const nextColor = colorMap[nextLocation[0]][nextLocation[1]]

	if (nextColor === 1) {
		const arrayToPush = arrayToMove.reverse()
		unitMap[unitLocations[turn][0]][unitLocations[turn][1]] = arrayToRemain
		unitMap[nextLocation[0]][nextLocation[1]] =
			unitMap[nextLocation[0]][nextLocation[1]].concat(arrayToPush)
		if (unitMap[nextLocation[0]][nextLocation[1]].length >= 4) break
	} else if (
		nextColor === 2 ||
		nextLocation[0] < 0 ||
		nextLocation[0] >= numRows ||
		nextLocation[1] < 0 ||
		nextLocation[1] >= numRows
	) {
		const newDirection = [-turnDirection[0], -turnDirection[1]]
		unitDirections[turn] = newDirection
		if (
			colorMap[unitLocations[turn][0] + newDirection[0]][
				unitLocations[turn][1] + newDirection[1]
			] === 2 ||
			unitLocations[turn][0] + newDirection[0] < 0 ||
			unitLocations[turn][0] + newDirection[0] >= numRows ||
			unitLocations[turn][1] + newDirection[1] < 0 ||
			unitLocations[turn][1] + newDirection[1] >= numRows
		)
			continue
		else if (
			colorMap[unitLocations[turn][0] + newDirection[0]][
				unitLocations[turn][1] + newDirection[1]
			] === 1
		) {
			unitMap[unitLocations[turn][0]][unitLocations[turn][1]] =
				arrayToRemain
			const arrayToPush = arrayToMove.reverse()
			unitMap[unitLocations[turn][0] + newDirection[0]][
				unitLocations[turn][1] + newDirection[1]
			] =
				unitMap[unitLocations[turn][0] + newDirection[0]][
					unitLocations[turn][1] + newDirection[1]
				].concat(arrayToPush)
			if (
				unitMap[unitLocations[turn][0] + newDirection[0]][
					unitLocations[turn][1] + newDirection[1]
				].length >= 4
			)
				break
		} else {
			unitMap[unitLocations[turn][0]][unitLocations[turn][1]] =
				arrayToRemain
			unitMap[unitLocations[turn][0] + newDirection[0]][
				unitLocations[turn][1] + newDirection[1]
			] =
				unitMap[unitLocations[turn][0] + newDirection[0]][
					unitLocations[turn][1] + newDirection[1]
				].concat(arrayToMove)
			if (
				unitMap[unitLocations[turn][0] + newDirection[0]][
					unitLocations[turn][1] + newDirection[1]
				].length >= 4
			)
				break
		}
	} else {
		unitMap[unitLocations[turn][0]][unitLocations[turn][1]] = arrayToRemain
		unitMap[nextLocation[0]][nextLocation[1]] =
			unitMap[nextLocation[0]][nextLocation[1]].concat(arrayToMove)
		if (unitMap[nextLocation[0]][nextLocation[1]].length >= 4) break
	}
}
if (count > 1000) {
	console.log(-1)
} else {
	console.log(count)
}
