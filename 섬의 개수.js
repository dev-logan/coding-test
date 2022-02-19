// https://www.acmicpc.net/problem/4963

function dfsIsland(h, w, height, width, seaMap) {
    if (h < 0 || h >= height || w < 0 || w >= width) return
    if (seaMap[h][w] === 1) {
        seaMap[h][w] = 0
        dfsIsland(h, w + 1, height, width, seaMap)
        dfsIsland(h, w - 1, height, width, seaMap)
        dfsIsland(h - 1, w, height, width, seaMap)
        dfsIsland(h - 1, w - 1, height, width, seaMap)
        dfsIsland(h - 1, w + 1, height, width, seaMap)
        dfsIsland(h + 1, w , height, width, seaMap)
        dfsIsland(h + 1, w - 1, height, width, seaMap)
        dfsIsland(h + 1, w + 1, height, width, seaMap)
    }
}

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let idx = 0

const counts = []
while (input[idx] !== '0 0') {
    const [width, height] = input[idx].split(' ').map(x => +x)
    const seaMap = []
    for (let i = 0; i < height; i++) {
        seaMap.push(input[++idx].split(' ').map(x => +x))
    }
    idx++

    let count = 0

    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            if (seaMap[h][w] === 1) {
                dfsIsland(h, w, height, width, seaMap)
                count++
            }
        }
    }

    counts.push(count)
}

console.log(counts.join('\n'))