// https://www.acmicpc.net/problem/1260

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [num, ...test] = input
const [n, m, v] = num.split(' ').map((x) => +x)
const graph = test
	.map((x) => x.split(' '))
	.reduce((graph, pair) => {
		graph[pair[0]]
			? graph[pair[0]].push(+pair[1])
			: (graph[pair[0]] = [+pair[1]])
		graph[pair[1]]
			? graph[pair[1]].push(+pair[0])
			: (graph[pair[1]] = [+pair[0]])
		return graph
	}, {})

console.log(graph)

// DFS
let toVisit = [v]
const visited = []
while (toVisit.length) {
	const node = toVisit.pop()
	console.log(node)
	visited.push(node)
    const nextnode = graph[node].shift()
    if (!visited.includes(nextnode)) toVisit.push(nextnode)
}
