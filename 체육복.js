function solution(n, lost, reserve) {
    let gym = []  //  가지고 있는 체육복의 현황
    for (let i=0;i<n;i++) { //  체육복을 1개씩 주고, 잃어버렸으면 1개 빼고, 여분이 있으면 1개 더한다.
      gym[i] = 1
      if (lost.includes(i+1)) gym[i]--
      if (reserve.includes(i+1)) gym[i]++
    }
    for (let i=0;i<gym.length;i++) {
      if (gym[i] == 2) {  // 여분이 있는 사람은 앞사람이 없으면 주고, 만약 뒷사람이 없으면 준다
        if (gym[i-1] == 0) {
          gym[i]--
          gym[i-1]++
        } else if (gym[i+1] == 0) {
          gym[i]--
          gym[i+1]++
        }
      }
    }
    let cnt = 0
    for (let i=0;i<gym.length;i++) {  // 최종적으로 체육복을 가지고 있는 사람의 수를 센다
      if (gym[i] >= 1) cnt++
    }
    return cnt
}
