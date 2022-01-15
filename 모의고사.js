function solution(answers) {
    // 각 수포자의 패턴
    let s1 = [1, 2, 3, 4, 5]
    let s2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    // answer의 길이에 따른 각 수포자들의 답변 저장
    let a1 = []
    let a2 = []
    let a3 = []
    // 몇개씩 맞췄는지 저장
    let c1 = 0
    let c2 = 0
    let c3 = 0

    for (let i=0;i<answers.length;i++) {
      a1.push(s1[i%s1.length])
      a2.push(s2[i%s2.length])
      a3.push(s3[i%s3.length])

      if (a1[i] == answers[i]) c1++
      if (a2[i] == answers[i]) c2++
      if (a3[i] == answers[i]) c3++
    }

    let corrects = [c1, c2, c3]
    // 세 명의 맞춘 개수 중 최대값
    let max = Math.max(...corrects)
    // 최대값을 가지는 수포자들의 번호 push
    let answer = []
    for (let i=0;i<3;i++) {
      if (corrects[i] == max) answer.push(i+1)
    }
    return answer
}
