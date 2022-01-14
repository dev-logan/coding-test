function solution(s) {
    if (s[0] == '+') {
      return parseInt(s.substring(1,))
    }
    if (s[0] == '-') {
      return -parseInt(s.substring(1,))
    }
    return parseInt(s)
}
