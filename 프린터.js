//  https://programmers.co.kr/learn/courses/30/lessons/42587

//  뒤 목록에 첫번째보다 우선순위가 높은 것이 없으면 출력하는 것을 반복
//  우선순위와 index를 묶은 object로 이루어진 array로 풀이

function solution(priorities, location) {
    let p_objects = priorities.reduce((acc, value, index) => {
      let object = {
        priority: value,
        index: index
      }
      acc.push(object)
      return acc
    }, [])

    let final_order = []
    while (final_order.length < priorities.length) {
      let [first, ...rest] = p_objects
      let rest_max = rest.reduce((acc, value) => {
        if (acc < value.priority) {
          acc = value.priority
        }
        return acc
      }, 0)
      if (first.priority < rest_max) {
        rest.push(first)
        p_objects = rest
      } else {
        final_order.push(first)
        p_objects = rest
      }
    }
    return final_order.findIndex(x => x.index===location) + 1
}
