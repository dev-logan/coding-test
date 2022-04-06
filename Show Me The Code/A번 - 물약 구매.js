const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, costs, ...discounts] = input
n = +n
costs = costs.split(' ').map(Number)

let index = 0
while (index < costs.length) {
    const n = +discounts[index++]
    if (n === 0) continue
    for (let i = 0; i < n; i++) {
        console.log(discounts[index++].split(' ').map(Number))
    }
}
