function solution(N, stages) {
    let rates = []  //  각 스테이지 별 실패율을 저장
    for (let i = 1; i <= N; i++) {
      let total = 0 //  해당 스테이지 보다 크거나 같은 수 개수
      let stage = 0 //  해당 스테이지의 개수
      for (let j = 0; j < stages.length; j++) {
        if (stages[j] >= i) total++
        if (stages[j] == i) stage++
      }
      rates.push([i, stage / total])  //  [스테이지, 실패율] 형태로 저장
    }
    let srates = rates.sort((a,b) => b[1]-a[1]) //  실패율 내림차순 정리
    let result = [] //  스테이지만 뽑아서 저장
    for (let i=0;i<srates.length;i++) {
      result.push(srates[i][0])
    }
    return result
}
