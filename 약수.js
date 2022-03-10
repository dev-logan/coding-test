// https://www.acmicpc.net/problem/1037

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, nums] = input
nums = nums.split(' ').map(x => +x)
console.log(Math.max(...nums) * Math.min(...nums))