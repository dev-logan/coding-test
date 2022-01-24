//  https://programmers.co.kr/learn/courses/30/lessons/42586

//  결국 힌트를 찾아보고 풀었다.

function solution(progresses, speeds) {
    let working_days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]))

    let number = working_days[0]
    let publishes = [0]

    for (let i = 0, j = 0; i < working_days.length; i++) {
      if (working_days[i] > number) {
        number = working_days[i]
        publishes[++j] = 1  //  j의 값을 늘리고 넣는다는 의미
      } else {
        publishes[j]++
      }
    }
    return publishes
}



//  원래 풀었던 풀이인데 찾아본 모든 테스트 케이스에서 답을 내놓는다. 왜 틀린 걸까?
//  답은 단순할 수록 정확한 것 같다.
function solution(progresses, speeds) {
    let working_days = []
    for (let i = 0; i < progresses.length; i++) {
      const working_day = Math.ceil((100 - progresses[i]) / speeds[i])
      working_days.push(working_day)
    }

    let publishes = []
    let publish
    let number
    for (let i = 0; i < working_days.length; i++) {
      if (!number) {
        number = working_days[i]
        publish = 0
        continue
      }
      if (working_days[i] > number) {
        number = working_days[i]
        publish = i - publish
        publishes.push(publish)
      }
    }
    if (publishes.length === 0) {
        return [progresses.length]
    }
    const last_publish = progresses.length - publishes.reduce((a,b) => a+b)

    publishes.push(last_publish)
    return publishes
}
