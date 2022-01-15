function solution(lottos, win_nums) {
    // lottos와 win_nums에서 일치하는 숫자의 개수 세기
    let cnt = 0
    for (let i = 0; i < lottos.length; i++) {
      if (win_nums.includes(lottos[i])) {
        cnt++
      }
    }
    // lottos에서 0의 개수 세기
    let zeros = lottos.filter(x => x==0).length
    // 당첨의 최대와 최소 경우
    let max = String(cnt + zeros)
    let min = String(cnt)
    let rank = {6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    return [rank[max],rank[min]]
}
