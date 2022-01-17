function solution(n)
{
    let sn = String(n)  //  숫자를 문자로 바꿈
    let tot = 0         //  각 글자를 숫자로 다시 바꾼 뒤 더해줌
    for (let i in sn) {
      tot += parseInt(sn[i])
    }
    return tot
}
