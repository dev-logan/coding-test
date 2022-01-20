// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    let pairs = []  //  yellow의 약수 쌍 구하기 -> 가능한 카펫의 조합
    for (let i = 0; i <= Math.sqrt(yellow); i++) {
      if (yellow % i == 0) {
        pairs.push([yellow/i + 2, i + 2])
      }
    }
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i]
      if (pair[0] * pair[1] - (pair[0] - 2) * (pair[1] - 2) == brown) {
        return pair
      }
    }
}
