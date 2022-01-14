function solution(n) {
   let sn = String(n)
    let sna = sn.split('').sort()
    return parseInt(sna.reverse().join(''))
}
