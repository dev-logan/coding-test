// https://www.acmicpc.net/problem/9372

// 그냥 국가의 수 - 1이 답인 문제

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [_, ...cases] = input

let index = 0
const countries = []
while (index < cases.length) {
    const theCase = cases[index].split(' ')
    countries.push(theCase[0])
    index += +theCase[1] + 1
}

console.log(countries.map(x => +x - 1).join('\n'))



// 함정에 빠진 부분

// const realCases = []
// while (testCases.length) {
//     const [numContries, numPlanes] = testCases.shift()
//     const realCase = [numContries]
//     for (let i = 0; i < numPlanes; i++) {
//         realCase.push(testCases.shift())
//     }
//     realCases.push(realCase)
// }

// for (const realCase of realCases) {
//     const [numContries, ...theCase] = realCase
//     const routes = {}
//     for (const route of theCase) {
//         if (routes[route[0]]) {
//             routes[route[0]].push(route[1])
//         } else {
//             routes[route[0]] = [route[1]]
//         }
//         if (routes[route[1]]) {
//             routes[route[1]].push(route[0])
//         } else {
//             routes[route[1]] = [route[0]]
//         }
//     }
//     console.log(numContries)
//     console.log(routes)
// }


