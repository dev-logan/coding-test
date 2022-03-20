// https://www.acmicpc.net/problem/2110

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, ...tests] = input

const [n, c] = nums.split(' ')
const houses = tests.map((x) => +x).sort((a, b) => a - b)

let minDist = 1
let maxDist = houses[n - 1] - houses[0]
let midDist = maxDist

while (true) {
	let count = 1
	let installedHouse = houses[0]

	for (let i = 1; i < n; i++) {
		if (houses[i] - installedHouse >= midDist) {
			count++
			installedHouse = houses[i]
		}
	}

	if (count < c) {
		maxDist = midDist
		midDist = Math.floor((maxDist + minDist) / 2)
	} else {
		minDist = midDist
		midDist = Math.floor((maxDist + minDist) / 2)
	}

    if (minDist === midDist || maxDist === midDist) break
}

console.log(midDist)