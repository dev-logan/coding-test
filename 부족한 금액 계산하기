function solution(price, money, count) {
    let tot = 0
    let add = price
    for (let i = 0; i < count; i++) {
      tot += price
      price += add
    }
    if (tot < money) {return 0}
    return tot - money
}
