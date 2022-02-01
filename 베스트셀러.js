// https://www.acmicpc.net/problem/1302

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const count = input.shift()

const book_object = input.reduce((acc, value) => {
  return {
    ...acc,
    [value] : acc[value] ? acc[value] + 1 : 1
  }
}, {})

// 가장 많이 팔린 개수
const max_count = Math.max(...Object.values(book_object))



console.log(Object.entries(book_object)
.filter(x => x[1] === max_count)
.sort((a,b) => {
  if (a[0] < b[0]) {
    return -1
  }
})[0][0])
