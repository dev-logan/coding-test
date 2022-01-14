function solution(x) {
    //자릿수의 합 구하기
    let sx = String(x)
    let tot = 0
    for (let i in sx) {
      tot += parseInt(sx[i])
    }
    if (x % tot == 0) return true
    else return false
}
