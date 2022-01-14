function solution(n) {
    let sn = String(n)
    let result = []
    for (let i in sn) {
      result.unshift(parseInt(sn[i]))
    }
    return result
}
