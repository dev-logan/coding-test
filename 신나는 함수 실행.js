// https://www.acmicpc.net/problem/9184

// const fs = require('fs')
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

// const memory = []

// const w = (a, b, c) => {
//     const [findMemory] = memory.filter((x) => {
//         return x[0] === a && x[1] === b && x[2] === c
//     })

//     let toPush
//     if (findMemory) {
//         return findMemory[3]
//     } else {
//         if (a <= 0 || b <= 0 || c <= 0) {
//             toPush = 1
//             memory.push([a, b, c, toPush])
//             return toPush
//         } else if (a > 20 || b > 20 || c > 20) {
//             toPush = w(20, 20, 20)
//             memory.push([a, b, c, toPush])
//             return toPush
//         } else if (a < b && b < c) {
//             toPush = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c)
//             memory.push([a, b, c, toPush])
//             return toPush
//         } else {
//             toPush =
//                 w(a - 1, b, c) +
//                 w(a - 1, b - 1, c) +
//                 w(a - 1, b, c - 1) -
//                 w(a - 1, b - 1, c - 1)
//             memory.push([a, b, c, toPush])
//             return toPush
//         }
//     }
// }

// input.pop()
// const testCases = input.map((x) => x.split(' ')).map((x) => x.map((x) => +x))

// let answer = ''
// for (const testCase of testCases) {
//     const [a, b, c] = testCase
//     answer += `w(${a}, ${b}, ${c}) = ${w(a, b, c)}\n`
// }

// console.log(answer)

// 다시 풀어보기

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const memo = []
for (let i = 0; i < 21; i++) {
	const arrayOne = []
	for (let j = 0; j < 21; j++) {
		const arrayTwo = []
		for (let k = 0; k < 21; k++) {
			arrayTwo.push(null)
		}
		arrayOne.push(arrayTwo)
	}
	memo.push(arrayOne)
}

function w(a, b, c, memo) {
	if (a <= 0 || b <= 0 || c <= 0) {
		return 1
	}
	if (a > 20 || b > 20 || c > 20) {
		return w(20, 20, 20, memo)
	}

	if (memo[a][b][c]) return memo[a][b][c]

	if (a < b && b < c) {
		return (memo[a][b][c] =
			w(a, b, c - 1, memo) +
			w(a, b - 1, c - 1, memo) -
			w(a, b - 1, c, memo))
	}
	return (memo[a][b][c] =
		w(a - 1, b, c, memo) +
		w(a - 1, b - 1, c, memo) +
		w(a - 1, b, c - 1, memo) -
		w(a - 1, b - 1, c - 1, memo))
}

let answer = ''
let index = 0
while (input[index] !== '-1 -1 -1') {
	const [a, b, c] = input[index++].split(' ').map((x) => +x)
	answer += `w(${a}, ${b}, ${c}) = ${w(a, b, c, memo)}\n`
}
console.log(answer)
