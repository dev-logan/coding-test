function solution(a, b) {
    let sum = Math.min(a,b)
    let tot = sum

    for (let i = 0; i < Math.abs(b - a); i++) {
      sum += 1
      tot += sum
    }
    return tot
}
