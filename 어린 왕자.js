// https://www.acmicpc.net/problem/1004


const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

// 데이터 다듬는 과정
const caseNum = Number(input.shift())
const inputSplit = input.map(x => x.split(' '))

// 테스트 케이스 별로 나눔
let test_cases = []
let elements_array = []
let element
for (let i = 0; i < inputSplit.length; i++) {
    element = inputSplit[i]
    if (element.length === 4 && elements_array.length !== 0) {
        test_cases.push(elements_array)
        elements_array = [element]
    } else {
        elements_array.push(element)
    }
    if (i === inputSplit.length - 1) {
        test_cases.push(elements_array)
    }
}

// 각 테스트 케이스 별로 문제 풀이
// 임의의 행성에서 출발점까지의 거리, 도착점까지의 거리 이렇게 두 종류의 거리가 있을 때
// 행성계 반지름보다 하나의 거리는 짧고 다른 하나의 거리는 길면 진입 혹은 이탈하게 된다.
let counts = []
for (let test_case of test_cases) {
    let locations = test_case.shift()
    const depart = locations.slice(0,2).map(x => Number(x))
    const arrival = locations.slice(2).map(x => Number(x))
    const numPlanets = Number(test_case.shift()[0])
    const planets = test_case.map(x => x.map(x => Number(x)))
    let count = 0
    for (let planet of planets) {
        let planetX = planet[0]
        let planetY = planet[1]
        let planetR = planet[2]
        let distanceFromDepart = distance(depart[0],depart[1],planetX,planetY)
        let distanceFromArrival = distance(arrival[0],arrival[1],planetX,planetY)
        if ((planetR - distanceFromDepart) * (planetR - distanceFromArrival) < 0) {
            count ++
        }
    }
    counts.push(count)
}

for (let count of counts) {
    console.log(count)
}

// 두 점 사이의 거리를 구하는 함수
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2))
