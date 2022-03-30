// https://www.acmicpc.net/problem/2667

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, ...list] = input
let map = list.map((x) => x.split(''))

const dy = [0, 0, 1, -1]
const dx = [1, -1, 0, 0]

let count = 0
const housecounts = []
for (let y = 0; y < +n; y++) {
	for (let x = 0; x < +n; x++) {
		if (map[y][x] === '1') {
			count++
			let toVisit = [[y, x]]
			let housecount = 0
			while (toVisit.length) {
				const node = toVisit.pop()
				const nodey = node[0]
				const nodex = node[1]
				if (map[nodey][nodex] === '1') {
					map[nodey][nodex] = '0'
					housecount++
				}
				for (let i = 0; i < 4; i++) {
					const newy = nodey + dy[i]
					const newx = nodex + dx[i]
					if (
						newy < 0 ||
						newy >= +n ||
						newx < 0 ||
						newx >= +n ||
						map[newy][newx] === '0'
					) {
						continue
					}
					toVisit.push([newy, newx])
				}
			}
			housecounts.push(housecount)
		}
	}
}
housecounts.sort((a, b) => a - b)
console.log(count)
console.log(housecounts.join('\n'))
