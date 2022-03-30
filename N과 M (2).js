// https://www.acmicpc.net/problem/15650

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)

const sequence = []
let answer = ''
const dfs = (start = 1) => {
    if (sequence.length === m) {
        answer += sequence.join(' ') + '\n'
        return
    }
	for (let i = start; i <= n; i++) {
		sequence.push(i)
		dfs(i + 1)
        sequence.pop()
	}
}
dfs()
console.log(answer)