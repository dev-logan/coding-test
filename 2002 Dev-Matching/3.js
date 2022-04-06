const n = 8,
	k = 4,
	a = 0,
	b = 3
const edges = [
	[0, 1],
	[1, 2],
	[2, 3],
	[4, 0],
	[5, 1],
	[6, 1],
	[7, 2],
	[7, 3],
	[4, 5],
	[5, 6],
	[6, 7],
]

const graph = edges.reduce((graph, pair) => {
	const x = pair[0]
	const y = pair[1]
	graph[x] ? graph[x].push(y) : (graph[x] = [y])
	graph[y] ? graph[y].push(x) : (graph[y] = [x])
	return graph
}, {})

let toVisit = [a]
const visited = []

while (toVisit.length) {
	const node = toVisit.pop()
	visited.push(node)
	const newNodes = graph[node].filter(x => !visited.includes(x))
	toVisit = [...toVisit, ...newNodes]
}

console.log(visited)