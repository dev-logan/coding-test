//  https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
    if (s.length === 1) {
        return 1
    }
    let splited_strings = []
    for (let i = 1; i <= s.length / 2; i++) {
      let splited_string = []
      for (let j = 0; j < s.length; j += i) {
        splited_string.push(s.substring(j, j + i))
      }
      splited_strings.push(splited_string)
    }
    return Math.min(...splited_strings.map(zip_length))
}

//  reduce 메소드를 활용한 문자 압축
function zip_length(arr) {
  let reserve
  let count = 0
  let zip = arr.reduce((acc, value, index) => {
    if (!reserve) {
      reserve = value
      count = 1
    } else if (value === reserve) {
      count++
    } else {
      if (count === 1) {
        acc += reserve
      } else {
        acc += count + reserve
      }
      reserve = value
      count = 1
    }
    if (index === arr.length - 1) {
      if (count === 1) {
        acc += reserve
      } else {
        acc += count + reserve
      }
    }
    return acc
  }, '')
  return zip.length
}
