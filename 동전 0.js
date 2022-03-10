// https://www.acmicpc.net/problem/11047

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [nums, ...coins] = input

let [n, k] = nums.split(' ').map(x => +x)

coins = coins.map(x => +x)

let count = 0
for (let i = n - 1; i >= 0; i--) {
    if (coins[i] <= k) {
        while (coins[i] <= k) {
            k -= coins[i]
            count++
        }
    }
    if (k === 0) break
}
console.log(count)