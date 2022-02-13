// https://www.acmicpc.net/problem/13335

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const data = input.map((x) => x.split(' ')).map((x) => x.map((x) => +x))

const bridgeLength = data[0][1]
const maxWeight = data[0][2]
const truckWeights = data[1].reverse()

const bridge = new Array(bridgeLength).fill(0)

let time = 0

while (true) {
    bridge.shift()
    if (truckWeights.length) {
        if (
            bridge.reduce((a, b) => a + b, 0) +
                truckWeights[truckWeights.length - 1] <=
            maxWeight
        ) {
            bridge.push(truckWeights.pop())
        } else {
            bridge.push(0)
        }
    } else {
        bridge.push(0)
    }
    time++
    if (bridge.reduce((a, b) => a + b, 0) === 0) break
}

console.log(time)
