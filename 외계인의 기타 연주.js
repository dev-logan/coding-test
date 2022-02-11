// https://www.acmicpc.net/problem/2841

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

input.shift()

const music = input.map(x => x.split(' ')).map(x => x.map(x => +x))

const stacks = {}
let count = 0
for (const note of music) {
    const line = note[0]
    const fret = note[1]
    if (!stacks[line]) {
        stacks[line] = [fret]
        count++
        continue
    }

    // 마지막 원소가 더 크면 같거나 작아질 때까지 pop한다.
    while (stacks[line][stacks[line].length - 1] > fret && stacks[line].length > 0) {
        stacks[line].pop()
        count++
    }

    // 마지막 원소가 더 작으면 push한다
    if (stacks[line][stacks[line].length - 1] < fret || stacks[line].length === 0) {
        stacks[line].push(fret)
        count++
        continue
    }
    
    // 마지막 원소가 같으면 continue
    if (stacks[line][stacks[line].length - 1] === fret) {
        continue
    }
}
console.log(count)
