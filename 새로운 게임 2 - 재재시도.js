// https://www.acmicpc.net/problem/17837

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [nums, ...mapAndHorse] = input

const [n, horse_count] = nums.split(' ').map((x) => +x)

const game_map = mapAndHorse.slice(0, n).map((x) => x.split(' ').map((x) => +x))

const horse_location_and_directions = mapAndHorse
	.slice(n)
	.map((x) => x.split(' ').map((x) => +x))
	.map((x) => [x[0] - 1, x[1] - 1, x[2] - 1])

const current_stacked_horse_map = []
for (let i = 0; i < n; i++) {
	const column = []
	for (let j = 0; j < n; j++) {
		column.push([])
	}
	current_stacked_horse_map.push(column)
}

for (let i = 0; i < horse_location_and_directions.length; i++) {
	const [r, c, d] = horse_location_and_directions[i]
	current_stacked_horse_map[r][c] = [i]
}

const dr = [0, 0, -1, 1]
const dc = [1, -1, 0, 0]

let turn_count = 1

while (turn_count <= 1000) {
	for (let horse_index = 0; horse_index < horse_count; horse_index++) {
		const [r, c, d] = horse_location_and_directions[horse_index]
		let new_r = r + dr[d]
		let new_c = c + dc[d]

		// 앞칸이 파란색이거나 벽이면, 먼저 방향과 앞칸을 재정의 한다.
		if (new_r < 0 || new_r >= n || new_c < 0 || new_c >= n || game_map[new_r][new_c] === 2) {
			const new_d = d % 2 === 0 ? d + 1 : d - 1
			horse_location_and_directions[horse_index][2] = new_d
			new_r = r + dr[new_d]
			new_c = c + dc[new_d]

			if (new_r < 0 || new_r >= n || new_c < 0 || new_c >= n || game_map[new_r][new_c] === 2) continue
		}

		const cut_index = current_stacked_horse_map[r][c].findIndex((x) => x === horse_index)
		let moving_horse_index_array = current_stacked_horse_map[r][c].slice(cut_index)
		current_stacked_horse_map[r][c] = current_stacked_horse_map[r][c].slice(0, cut_index)

		if (game_map[new_r][new_c] === 1) {
			moving_horse_index_array = moving_horse_index_array.reverse()
		}

		// current_stacked_horse_map과 horse_location_and_directions을 업데이트
		for (const moving_horse_index of moving_horse_index_array) {
			current_stacked_horse_map[new_r][new_c].push(moving_horse_index)
			horse_location_and_directions[moving_horse_index][0] = new_r
			horse_location_and_directions[moving_horse_index][1] = new_c
		}

		if (current_stacked_horse_map[new_r][new_c].length >= 4) {
			return console.log(turn_count)
		}
	}
	turn_count++
}
console.log(-1)
