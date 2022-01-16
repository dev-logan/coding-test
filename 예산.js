function solution(d, budget) {
    let result = budget
    // 예산 목록을 오름차순으로 정리
    let sd = d.sort((a,b) => a-b)
    for (let i = 0; i < d.length; i++) {
      // 예산을 작은 것부터 budget에서 빼준다
      result -= sd[i]
      // 예산이 마이너스가 되기 전까지의 부서 개수를 리턴
      if (result < 0) {
        return i
      }
    }
    // for문을 전부 돌아도 예산이 마이너스가 안 됐다면 전체 부서 개수를 리턴
    return d.length
}
