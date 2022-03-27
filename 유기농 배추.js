// https://www.acmicpc.net/problem/1012

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [numTest, ...test] = input
let index = 0
const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

let answer = ''
for (let i = 0; i < numTest; i++) {
	const [m, n, k] = test[index++].split(' ').map((x) => +x)
	const locations = []
	for (let j = 0; j < k; j++) {
		locations.push(test[index++].split(' ').map((x) => +x))
	}
	const map = Array.from(Array(m), () => Array(n).fill(0))
	for (const location of locations) {
		const x = location[0]
		const y = location[1]
		map[x][y] = 1
	}
    let count = 0
	for (let x = 0; x < m; x++) {
		for (let y = 0; y < n; y++) {
			if (map[x][y] === 1) {
                count++
				const toVisit = []
				toVisit.push([x, y])
				while (toVisit.length) {
					const node = toVisit.pop()
					const a = node[0]
					const b = node[1]
					map[a][b] = 0
					for (let i = 0; i < 4; i++) {
						const newx = a + dx[i]
						const newy = b + dy[i]
						if (
							newx < 0 ||
							newx >= m ||
							newy < 0 ||
							newy >= n ||
							map[newx][newy] === 0
						)
							continue
						toVisit.push([newx, newy])
					}
				}
			}
		}
	}
    answer += count + '\n'
}
console.log(answer)