function solution(arr, divisor) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      let a = arr[i]
      if (a % divisor == 0) {
        result.push(a)
      }
    }
    if (result.length == 0) {return [-1]}
    return result.sort(function(a,b){return a-b})
}
