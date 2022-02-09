// https://www.acmicpc.net/problem/2448

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const N = +input[0]

function triangle(N) {
    if (N === 3) {
        return ['  *  ', ' * * ', '*****']
    }

    // 이전 단위 삼각형의 밑변 길이
    const base = triangle(N / 2)[triangle(N / 2).length - 1].length
    // 그리려는 삼각형의 밑변 길이
    const currentBase = 2 * base + 1

    const triangleArray = []
    // 윗 부분 그리기
    for (const line of triangle(N / 2)) {
        triangleArray.push(
            ' '.repeat((currentBase - line.length) / 2) +
                line +
                ' '.repeat((currentBase - line.length) / 2)
        )
    }
    // 아랫 부분 그리기
    for (const line of triangle(N / 2)) {
        triangleArray.push(line + ' ' + line)
    }
    return triangleArray
}

console.log(triangle(N).join('\n'))
