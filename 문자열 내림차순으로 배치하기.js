function solution(s) {
    let ss = s.split('')
    // 내림차순 적용하고, 대문자가 뒤로 가는 규칙 추가
    ss.sort(function(a,b) {
      if (a > b) return -1
      if (a==a.toLowerCase()&&b==b.toUpperCase()) return -1
    })
    return ss.join('')
}
