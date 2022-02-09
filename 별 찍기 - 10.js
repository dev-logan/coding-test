// https://www.acmicpc.net/problem/2447

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [N] = input.map((x) => +x)

function recursiveStar(N) {
    if (N === 3) {
        return ['***', '* *', '***']
    }
    let starArray = []
    for (let i = 0; i < 3; i++) {
        for (let line of recursiveStar(N / 3)) {
            if (i === 1) {
                starArray.push(line + ' '.repeat(line.length) + line)
                continue
            }
            starArray.push(line.repeat(3))
        }
    }
    return starArray
}

console.log(recursiveStar(N).join('\n'))
