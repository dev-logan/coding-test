function solution(dartResult) {
    let re = /\d{1,2}[D,S,T][*,#]|\d{1,2}[D,S,T]/g  //  각 다트의 점수를 추출할 수 있는 regex

    let results = dartResult.match(re)  //  각 다트 결과를 array에 저장

    let answers = []  //  계산된 점수들을 담을 array
    for (let i=0;i<results.length;i++) {
      let result = results[i]
      let score = result.match(/\d{1,2}/g)[0] //  score, bonus, option을 추출
      let bonus = result.match(/[D,S,T]/g)[0]
      let option
      if (result.match(/[*,#]/g) != null) {
        option = result.match(/[*,#]/g)[0]
      }

      let num //  제곱들을 적용하여 먼저 answers에 담음
      if (bonus == 'S') {
        num = Number(score)
      } else if (bonus == 'D') {
        num = Math.pow(score, 2)
      } else if (bonus == 'T') {
        num = Math.pow(score, 3)
      }
      answers.push(num)

      if (option == '*') {  //  bonus의 값에 따라 이미 answers에 저장된 값들에 해당 값을 곱해줌
        if (answers.length == 1) {  //  첫 다트 결과에 *이 뜨는 경우를 생각
          answers[answers.length-1] *= 2
        } else {
          answers[answers.length-1] *= 2
        answers[answers.length-2] *= 2
        }
      } else if (option == '#') {
        answers[answers.length-1] *= -1
      }
    }
    return answers.reduce((a,b) => a+b)
}
