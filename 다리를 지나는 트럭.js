//  https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

//  0으로 가득찬 bridge에서 출발

function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0)

    let time = 1
    bridge.shift()
    bridge.push(truck_weights[0])
    truck_weights.shift()

    while (bridge.reduce((a,b) => a+b,0) > 0) {
        bridge.shift()
        if (bridge.reduce((a,b) => a+b,0) + truck_weights[0] <= weight) {
            bridge.push(truck_weights[0])
            truck_weights.shift()
        } else {
            bridge.push(0)
        }
        time++
    }
    return time
}
