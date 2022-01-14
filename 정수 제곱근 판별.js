function solution(n) {
    if (Number.isInteger(Math.sqrt(n))) {
      let sq = Math.sqrt(n)
      return Math.pow(sq+1, 2)
    } else {
        return -1
    }
}
