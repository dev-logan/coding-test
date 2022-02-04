// https://www.acmicpc.net/problem/9375

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [numCases, ...cases] = input

const splitCases = cases.map(x => x.split(' '))

let test_cases = []
let elements_array = []
let element
for (let i = 0; i < splitCases.length; i++) {
    element = splitCases[i]
    if (element.length === 1 && elements_array.length !== 0) {
        test_cases.push(elements_array)
        elements_array = [element]
    } else {
        elements_array.push(element)
    }
    if (i === splitCases.length - 1) {
        test_cases.push(elements_array)
    }
}

test_cases = test_cases.map(x => x.slice(1))

for (let test_case of test_cases) {
    let clothes_dict = {}
    for (let t of test_case) {
        let clothes = t[0]
        let kind = t[1]
        if (clothes_dict[kind]) {
            clothes_dict[kind].push(clothes)
        } else {
            clothes_dict[kind] = [clothes]
        }
    }
    console.log(Object.entries(clothes_dict).map(x => x[1].length + 1).reduce((acc,value) => {
        acc *= value
        return acc
    },1) - 1)
}
