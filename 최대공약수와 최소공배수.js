function solution(n, m) {
  // 작은 수는 a, 큰 수는 b  
  let a
    let b
    if (n <= m) {
      a = n
      b = m
    } else {
      a = m
      b = n
    }

    // 최대 공배수
    // a에서 1까지 작아지면서, a와 b 둘 다 나눠지는 수
    let gcf
    for (let i = a; i >= 1; i--) {
      if (a%i==0 && b%i==0) {
        gcf = i
        break
      }
    }

    // 최소 공약수
    // b, 2b, 3b ... 올라가면서 a로 나뉘어지는 최소의 수
    let lcm = b
    while(true) {
      if (lcm % a == 0) {
        break
      } else {
        lcm += b
      }
    }

    return [gcf, lcm]
}
