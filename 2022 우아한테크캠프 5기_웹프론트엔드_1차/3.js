const board = ['DDCCC', 'DBBBC', 'DBABC', 'DBBBC', 'DDCCC']

const n = board.length
const m = board[0].length

const graph = board.map((x) => x.split(''))

function dfs(graph, v, toFind) {
	const [y, x] = v
	graph[y][x] = 0
	count++

	dy = [-1, 0, 1, 0]
	dx = [0, 1, 0, -1]

	for (let i = 0; i < 4; i++) {
		ny = y + dy[i]
		nx = x + dx[i]

		if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
			continue
		}

		if (graph[ny][nx] === toFind) {
			dfs(graph, [ny, nx], toFind)
		}
	}
}

results = []

// 가로 탐색
for (let i = 0; i < n; i++) {
	graphCopy = JSON.parse(JSON.stringify(graph))
	count = 0
	for (let j = 0; j < m; j++) {
		if (graphCopy[i][j] === 0) {
			continue
		}
		const toFind = graphCopy[i][j]
		dfs(graphCopy, [i, j], toFind)
	}
	results.push(count)
}

// 세로 탐색
for (let j = 0; j < m; j++) {
	graphCopy = JSON.parse(JSON.stringify(graph))
	count = 0
	for (let i = 0; i < n; i++) {
		if (graphCopy[i][j] === 0) {
			continue
		}
		const toFind = graphCopy[i][j]
		dfs(graphCopy, [i, j], toFind)
	}
	results.push(count)
}

console.log(Math.max(...results))
