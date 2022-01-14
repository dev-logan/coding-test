function solution(n)
{
    let sn = String(n)
    let tot = 0
    for (let i in sn) {
      tot += parseInt(sn[i])
    }

    return tot
}
