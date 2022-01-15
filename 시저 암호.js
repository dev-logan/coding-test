function solution(s, n) {
    let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    // 소문자 array 만들기
    let lower_alphabets = alphabets.map(x => x.toLowerCase())
    // s의 문자를 한글자씩 변환해서 answer에 더해주기
    let answer = ''
    let idx
    for (let i=0;i<s.length;i++) {
      // 공백일 경우 공백을 더함
      if (s[i] == ' ') {
        answer += ' '
        continue
      }
      if (s[i].toLowerCase() == s[i]) {
        idx = lower_alphabets.indexOf(s[i])
        answer += lower_alphabets[(idx+n)%alphabets.length]
      } else {
        idx = alphabets.indexOf(s[i])
        answer += alphabets[(idx+n)%alphabets.length]
      }
    }
    return answer
}
