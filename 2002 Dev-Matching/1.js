const dist = [
	[0, 5, 2, 4, 1],
	[5, 0, 3, 9, 6],
	[2, 3, 0, 6, 3],
	[4, 9, 6, 0, 3],
	[1, 6, 3, 3, 0],
]

// A, B, C, D, E
const sequence = []
sequence[0] = 0
sequence[1] = dist[0][1]
for (let i = 2; i < dist.length; i++) {
	const a = dist[0][i]
	const b = -dist[0][i]
	if (Math.abs(sequence[1] - a) === dist[1][i]) {
		sequence[i] = a
	} else {
		sequence[i] = b
	}
}
let answer1 = sequence
	.map((value, index) => {
		return [index, value]
	})
	.sort((a, b) => a[1] - b[1])
	.map((x) => x[0])
let answer2 = sequence
	.map((value, index) => {
		return [index, value]
	})
	.sort((a, b) => a[1] - b[1])
	.map((x) => x[0])
	.reverse()
let result = [answer1, answer2]
console.log(result.sort())

function solution(dist) {
	const sequence = []
	sequence[0] = 0
	sequence[1] = dist[0][1]
	for (let i = 2; i < dist.length; i++) {
		const a = dist[0][i]
		const b = -dist[0][i]
		if (Math.abs(sequence[1] - a) === dist[1][i]) {
			sequence[i] = a
		} else {
			sequence[i] = b
		}
	}
	let answer1 = sequence
		.map((value, index) => {
			return [index, value]
		})
		.sort((a, b) => a[1] - b[1])
		.map((x) => x[0])
	let answer2 = sequence
		.map((value, index) => {
			return [index, value]
		})
		.sort((a, b) => a[1] - b[1])
		.map((x) => x[0])
		.reverse()
	let result = [answer1, answer2]
	return result.sort()
}
