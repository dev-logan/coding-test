// https://www.acmicpc.net/problem/2606

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m, ...list] = input

const graph = list
	.map((x) => x.split(' '))
	.reduce((graph, pair) => {
		graph[pair[0]]
			? graph[pair[0]].push(pair[1])
			: (graph[pair[0]] = [pair[1]])
		graph[pair[1]]
			? graph[pair[1]].push(pair[0])
			: (graph[pair[1]] = [pair[0]])
		return graph
	}, {})

let toVisit = ['1']
const visited = []
while (toVisit.length) {
	const node = toVisit.pop()
	if (visited.includes(node)) continue
	visited.push(node)
	toVisit = [...graph[node], ...toVisit]
}

console.log(visited.length - 1)
