function solution(arr, divisor) {
    // arr 중에서 divisor로 나누어 떨어지는 값들을 result에 저장
    let result = []
    for (let i = 0; i < arr.length; i++) {
      let a = arr[i]
      if (a % divisor == 0) {
        result.push(a)
      }
    }
    //  result에 저장된 것이 없으면 [-1]을 return
    if (result.length == 0) {return [-1]}
    // 오름차순 sort
    return result.sort(function(a,b){return a-b})
}
