function solution(s){
    s = s.toLowerCase()
    let cnt_p = 0
    let cnt_y = 0
    for (let i = 0; i < s.length; i++) {
      if (s[i] == 'p') {
        cnt_p++
      }
      if (s[i] == 'y') {
        cnt_y++
      }
    }
    if (cnt_p == cnt_y) {
      return true
    } else {
      return false
    }
}
