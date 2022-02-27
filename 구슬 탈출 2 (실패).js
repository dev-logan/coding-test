// https://www.acmicpc.net/problem/13460

class Queue {
	constructor() {
		this.storage = {}
		this.front = 0
		this.rear = 0
	}

	size() {
		if (this.storage[this.rear] === undefined) {
			return 0
		} else {
			return this.rear - this.front + 1
		}
	}

	add(value) {
		if (this.size() === 0) {
			this.storage['0'] = value
		} else {
			this.rear += 1
			this.storage[this.rear] = value
		}
	}

	popleft() {
		let temp
		if (this.front === this.rear) {
			temp = this.storage[this.front]
			delete this.storage[this.front]
			this.front = 0
			this.rear = 0
		} else {
			temp = this.storage[this.front]
			delete this.storage[this.front]
			this.front += 1
		}
		return temp
	}
}

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [nums, ...board] = input
const [n, m] = nums.split(' ').map((x) => +x)

const game_map = board.map((x) => x.split(''))

// 동, 서, 남, 북
const dr = [-1, 0, 1, 0]
const dc = [0, 1, 0, -1]

const visited = []
for (let i = 0; i < n; i++) {
	const array_i = []
	for (let j = 0; j < m; j++) {
		const array_j = []
		for (let k = 0; k < n; k++) {
			const array_k = []
			for (let l = 0; l < m; l++) {
				array_k.push(false)
			}
			array_j.push(array_k)
		}
		array_i.push(array_j)
	}
	visited.push(array_i)
}

const queue = new Queue()

let red_row, red_col, blue_row, blue_col

for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
		if (game_map[i][j] === 'R') {
			red_row = i
			red_col = j
		} else if (game_map[i][j] === 'B') {
			blue_row = i
			blue_col = j
		}
	}
}

queue.add([red_row, red_col, blue_row, blue_col, 1])
visited[red_row][red_col][blue_row][blue_col] = true

function move_until_wall_or_hole(r, c, diff_r, diff_c, game_map) {
	let move_count = 0
	while (game_map[r + diff_r][c + diff_c] !== '#' && game_map[r][c] !== '0') {
		r += diff_r
		c += diff_c
		move_count++
	}
	return [r, c, move_count]
}

let try_count
while (queue.size()) {
	[red_row, red_col, blue_row, blue_col, try_count] = queue.popleft()
	if (try_count > 10) break

	for (let i = 0; i < 4; i++) {
		let [next_red_row, next_red_col, r_count] = move_until_wall_or_hole(
			red_row,
			red_col,
			dr[i],
			dc[i],
			game_map
		)
		let [next_blue_row, next_blue_col, b_count] = move_until_wall_or_hole(
			blue_row,
			blue_col,
			dr[i],
			dc[i],
			game_map
		)

		if (game_map[next_blue_row][next_blue_col] === '0') continue
		if (game_map[next_red_row][next_red_col] === '0')
			return console.log(try_count)
		if (next_red_row === next_blue_row && next_red_col === next_blue_col) {
			if (r_count > b_count) {
				next_red_row -= dr[i]
				next_red_col -= dc[i]
			} else {
				next_blue_row -= dr[i]
				next_blue_col -= dc[i]
			}
		}

		if (
			!visited[next_red_row][next_red_col][next_blue_row][next_blue_col]
		) {
			visited[next_red_row][next_red_col][next_blue_row][
				next_blue_col
			] = true
			queue.add([
				next_red_row,
				next_red_col,
				next_blue_row,
				next_blue_col,
				try_count + 1,
			])
		}
	}
}

console.log(try_count)
console.log(-1)
