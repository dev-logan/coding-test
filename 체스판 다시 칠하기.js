const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const shape = input.shift().split(' ')

let squares = []
for (let i = 0; i < shape[0] - 8 + 1; i++) {
  let vertical = input.slice(i, i + 8)
  for (let j = 0; j < shape[1] - 8 + 1; j++) {
    let horizontal = vertical.map((line) => {
      return line.substring(j, j+8)
    })
    squares.push(horizontal)
  }
}

console.log(Math.min(...squares.map(x => repaint(x))))




// 정사각형에서 몇개를 다시 칠해야 하는지 아는 함수
function repaint(square) {
  // 모범 답안 두가지 경우
  const correctSquareB = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'
  ]
  const correctSquareW = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW'
  ]
  let countB = 0
  let countW = 0
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (square[i][j] !== correctSquareB[i][j]) {
        countB++
      }
      if (square[i][j] !== correctSquareW[i][j]) {
        countW++
      }
    }
  }
  return Math.min(countB, countW)
