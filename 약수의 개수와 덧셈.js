// 약수의 개수를 구하는 함수
function counter(n) {
  let cnt =0
  for (let i=1;i<=n;i++) {
    if (n % i == 0) {
      cnt++
    }
  }
  return cnt
}

function solution(left, right) {
    let result = 0
    for (let i = left; i <= right; i++) {
      if (counter(i) % 2 == 0) result += i
      else result -= i
    }
    return result
}


// 다른 풀이: 제곱근이 정수면 약수의 개수가 홀수
