// https://www.acmicpc.net/problem/2630

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, ...map] = input
n = +n
map = map.map((x) => x.split(' ').map(Number))

// 모든 element가 1인지 체크
const checkOne = (part) => {
	const x = part.length
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < x; j++) {
			if (part[i][j] === 0) {
				return false
			}
		}
	}
	return true
}

// 모든 element가 0인지 체크
const checkZero = (part) => {
	const x = part.length
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < x; j++) {
			if (part[i][j] === 1) {
				return false
			}
		}
	}
	return true
}

let countOne = 0
let countZero = 0
const divide = (part) => {
    if (checkOne(part)) {
        countOne++
        return
    } else if (checkZero(part)) {
        countZero++
        return
    }
	const x = part.length

	const part1 = []
	const part2 = []
	const part3 = []
	const part4 = []

	for (let i = 0; i < x; i++) {
		const line = part[i]
		const frontLine = line.slice(0, x / 2)
		const backLine = line.slice(x / 2)

		if (i < x / 2) {
			part1.push(frontLine)
			part2.push(backLine)
		} else {
			part3.push(frontLine)
			part4.push(backLine)
		}
	}

	const parts = [part1, part2, part3, part4]
	for (const p of parts) {
		if (checkOne(p)) {
			countOne++
		} else if (checkZero(p)) {
			countZero++
		} else {
			divide(p)
		}
	}
}

divide(map)
console.log(countZero)
console.log(countOne)