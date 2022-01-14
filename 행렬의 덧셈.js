function solution(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
      let a1 = arr1[i]
      let a2 = arr2[i]
      let a = []
      for (let j = 0; j < a1.length; j++) {
        a[j] = a1[j] + a2[j]
      }
      result.push(a)
    }
    return result
}
