//  2진법 string으로 변환해주는 함수
function binaryString(arr, n) {
  return arr.map(function (x) {
                  let x2 = x.toString(2)
                  if (x2.length < n) {
                    x2 = '0'.repeat(n - x2.length) + x2 //  5자리가 안 되면 앞에 0을 추가해준다.
                  }
                  return x2
                })
}

function solution(n, arr1, arr2) {
    let bs1 = binaryString(arr1, n)
    let bs2 = binaryString(arr2, n)

    let result = []
    for (let i=0;i<n;i++) {
      let line1 = bs1[i]
      let line2 = bs2[i]

      let new_string = ''
      for (let j=0;j<n;j++) {
        if (line1[j] == 1) new_string += '#'  // 둘 중 하나라도 1이면 #을 추가
        else {
          if (line2[j] == 0) new_string += ' '  //  둘 다 0이면 빈칸을 추가
          else new_string += '#'  //  // 둘 중 하나라도 1이면 #을 추가
        } 
      }
      result.push(new_string)
    }
    return result
}
