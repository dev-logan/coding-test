// 에라토스테네스의 체라는 방식을 찾아보고 만들었다.
function solution(n) {
    // 모든 값이 true를 가지는 array를 생성한다.
    // array의 각 index number가 자연수 그 자체를 의미한다.
    let array = []
    for (let i = 0; i <= n; i++) {
      array.push(true)
    }
    // 0과 1은 소수가 아니므로 미리 false를 지정한다.
    array[0] = false
    array[1] = false

    // 에라토스테네스에 따르면 소수 검사는 제곱근까지만 하면 된다고 한다.
    for (let i = 2; i <= Math.sqrt(n); i++) {
      // 예를 들어 i가 2이면 2가 소수인지 검사, 맞다면 이후 4,6,8,10...이 소수가 아니라고 표기한다.
      if (array[i]) {
        for (let j = 2*i; j <= n; j += i) {
          array[j]= false
        }
      }
    }
    return array.reduce((a,b) => a+b)
}





// 처음엔 단순하게 아래와 같은 방식을 시도했었는데 시간 복잡도가 높았음
function isPrime(a) {
  for (let i = 2; i < a; i++) {
    if (a % i == 0) return false
  }
  return true
}

function solution(n) {
  let cnt = 0
  for (let i = 3; i <= n; i++) {
    if(isPrime(i)) cnt++
  }
  return cnt+1
}
