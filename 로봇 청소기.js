// https://www.acmicpc.net/problem/14503

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [_, [h, w, d], ...map] = input
	.map((x) => x.split(' '))
	.map((x) => x.map((x) => +x))

// 북 동 남 서
const dh = [-1, 0, 1, 0]
const dw = [0, 1, 0, -1]

let count = 0
while (true) {
	// 현재 칸 청소
	if (map[h][w] !== -1) {
		map[h][w] = -1
		count++
	}

	// 방향 정의
	const left_d = d === 0 ? 3 : d - 1
	const right_d = d === 3 ? 0 : d + 1
	let back_d
	if (d === 2) {
		back_d = 0
	} else if (d === 3) {
		back_d = 1
	} else {
		back_d = d + 2
	}

	const left_dh = dh[left_d]
	const left_dw = dw[left_d]
	const right_dh = dh[right_d]
	const right_dw = dw[right_d]
	const back_dh = dh[back_d]
	const back_dw = dw[back_d]
	const front_dh = dh[d]
	const front_dw = dw[d]

	// 왼쪽 칸의 숫자 확인
	if (map[h + left_dh][w + left_dw] === 0) {
		d = left_d
		h += left_dh
		w += left_dw
	} else if (
		map[h + left_dh][w + left_dw] !== 0 &&
		map[h + right_dh][w + right_dw] !== 0 &&
		map[h + front_dh][w + front_dw] !== 0 &&
		map[h + back_dh][w + back_dw] !== 0
	) {
		if (map[h + back_dh][w + back_dw] === 1) {
			break
		} else if (map[h + back_dh][w + back_dw] === -1) {
			h += dh[back_d]
			w += dw[back_d]
		}
	} else {
		d = left_d
	}
}
console.log(count)
