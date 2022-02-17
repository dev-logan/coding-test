// https://www.acmicpc.net/problem/8911

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [num, ...testCases] = input

num = +num
testCases = testCases.map((x) => x.split(''))

const directions = [[0, 1],[1, 0],[0, -1],[-1, 0]]

const answers = []
for (let i = 0; i < num; i++) {
    const testCase = testCases[i]
    const locations = [[0, 0]]
    let directionIndex = 0
    let location = [0, 0]

    for (const command of testCase) {
        let direction = directions[directionIndex]

        switch (command) {
            case 'F':
                location = [location[0] + direction[0], location[1] + direction[1]]
                locations.push(location)
                break
            case 'B':
                location = [location[0] - direction[0], location[1] - direction[1]]
                locations.push(location)
                break
            case 'L':
                directionIndex = directionIndex === 0 ? 3 : directionIndex - 1
                break
            case 'R':
                directionIndex = directionIndex === 3 ? 0 : directionIndex + 1
                break
        }
    }

    const xs = locations.map(x => x[0])
    const ys = locations.map(x => x[1])
    const maxX = Math.max(...xs)
    const minX = Math.min(...xs)
    const maxY = Math.max(...ys)
    const minY = Math.min(...ys)

    answers.push((maxX - minX) * (maxY - minY))
}

console.log(answers.join('\n'))