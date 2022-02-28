// https://www.acmicpc.net/problem/2869

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [up, down, top] = input[0].split(' ').map(x => +x)

console.log(Math.ceil((top - up) / (up - down)) + 1)