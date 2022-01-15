function solution(sizes) {
    // mins와 maxs에 각 카드 크기의 작은값과 큰값을 저장
    let mins = []
    let maxs = []
    for (let i in sizes) {
      let size = sizes[i]
      if (size[0] > size[1]) sizes[i] = [size[1], size[0]]
      mins.push(sizes[i][0])
      maxs.push(sizes[i][1])
    }
    // mins와 maxs 각각에서 최대값의 곱
    return Math.max(...mins) * Math.max(...maxs)
}
