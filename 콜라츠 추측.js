function solution(n) {
    if (n == 1) return 0
    let cnt = 0
    for (let i = 0; i < 500; i++) {
      if (n % 2 == 0) {
        n /= 2
      } else {
        n = n * 3 + 1
      }
      cnt++
      if (n == 1) break
    }
    if (n != 1) return -1
    else return cnt
}
