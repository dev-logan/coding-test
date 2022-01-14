function solution(x, n) {
    let a = x

    let result = []

    for (let i = 0; i < n; i++) {
      result.push(x)
      x += a
    }

    return result
}
