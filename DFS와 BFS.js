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

// DFS
let resultDFS = ''
let toVisitDFS = [v]
const visitedDFS = []
while (toVisitDFS.length) {
	const node = toVisitDFS.pop()
	if (!node) continue
	if (visitedDFS.includes(node)) continue
	resultDFS += node + ' '
	visitedDFS.push(node)
	if (graph[node]) {
		graph[node].sort((a, b) => b - a)
		toVisitDFS = [...toVisitDFS, ...graph[node]]
	}
}
console.log(resultDFS.trim())

// BFS
let resultBFS = ''
let toVisitBFS = [v]
const visitedBFS = []
while (toVisitBFS.length) {
	const node = toVisitBFS.shift()
	if (!node) continue
	if (visitedBFS.includes(node)) continue
	resultBFS += node + ' '
	visitedBFS.push(node)
	if (graph[node]) {
		graph[node].sort((a, b) => a - b)
		toVisitBFS = [, ...toVisitBFS, ...graph[node]]
	}
}
console.log(resultBFS.trim())
