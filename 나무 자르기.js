// https://www.acmicpc.net/problem/2805

// while 문으로 풀기
// const fs = require('fs')
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

// const treesNeeded = input[0].split(' ').map((x) => +x)[1]
// const trees = input[1].split(' ').map((x) => +x)

// let minHeight = 0
// let maxHeight = Math.max(...trees)
// let setHeight

// while (true) {
//     if (minHeight === maxHeight - 1) {
//         setHeight = minHeight
//         break
//     }
//     setHeight = Math.floor((minHeight + maxHeight) / 2)
//     let sumTrees = trees.reduce((sum, height) => {
//         if (height > setHeight) {
//             sum += height - setHeight
//         }
//         return sum
//     }, 0)
//     if (sumTrees > treesNeeded) {
//         minHeight = setHeight
//     } else if (sumTrees < treesNeeded) {
//         maxHeight = setHeight
//     } else break
// }
// console.log(setHeight)

// 재귀함수로 풀기
// const fs = require('fs')
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

// const neededTrees = input[0].split(' ').map((x) => +x)[1]
// const trees = input[1].split(' ').map((x) => +x)

// const minHeight = 0
// const maxHeight = Math.max(...trees)

// function binarySearchTreeHeight(minHeight, maxHeight, trees, neededTrees) {
//     if (minHeight === maxHeight - 1) return minHeight
//     let setHeight = Math.floor((minHeight + maxHeight) / 2)

//     let sumTrees = trees.reduce((sum, height) => {
//         if (height > setHeight) {
//             sum += height - setHeight
//         }
//         return sum
//     }, 0)

//     if (sumTrees > neededTrees) {
//         return binarySearchTreeHeight(setHeight, maxHeight, trees, neededTrees)
//     } else if (sumTrees < neededTrees) {
//         return binarySearchTreeHeight(minHeight, setHeight, trees, neededTrees)
//     } else {
//         return setHeight
//     }
// }

// console.log(binarySearchTreeHeight(minHeight, maxHeight, trees, neededTrees))

// 다시 풀기
const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [num, test] = input
const [n, m] = num.split(' ').map((x) => +x)
const trees = test.split(' ').map((x) => +x)

let low = 0
let high = 1000000000
let mid

while (low + 1 !== high) {
	mid = Math.floor((low + high) / 2)

	const sum = trees.reduce((total, height) => {
		if (height > mid) {
			total += height - mid
		}
        return total
	}, 0)

	if (sum >= m) {
		low = mid
	} else {
		high = mid
	}
}

console.log(low)
