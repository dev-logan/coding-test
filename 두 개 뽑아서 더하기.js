function solution(numbers) {
    let first
    let second
    // 숫자 두개를 더한 모든 조합을 combis에 저장
    let combis = []
    for (let i = 0; i < numbers.length; i++) {
      first = numbers[i]
      for (let j = i + 1; j < numbers.length; j++) {
        second = numbers[j]
        combis.push(first+second)
      }
    }
    // combis에서 unique한 값만 남김
    let combi_set = Array.from(new Set(combis))
    // 오름차순으로 정리
    return combi_set.sort((a, b) => a - b)
}
