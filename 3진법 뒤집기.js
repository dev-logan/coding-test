function solution(n) {
    // 3진법으로 변환
    let n3 = n.toString(3)
    // array로 나눈 뒤, 역순, 문자열로 합치기
    let nr = n3.split('').reverse().join('')
    // 3진법에서 다시 10진법으로
    return Number.parseInt(nr, 3)
}
