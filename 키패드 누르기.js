let initial =[['N','N','N'],['N','N','N'],['N','N','N'],['L','N','R']]
// 숫자마다의 좌표
let locations = {1:[0,0],2:[0,1],3:[0,2],4:[1,0],5:[1,1],6:[1,2],7:[2,0],8:[2,1],9:[2,2],0:[3,1]}

function solution(numbers, hand) {
    let result = ''
    let array = initial
    for (let i=0;i<numbers.length;i++) {
      let input = numbers[i]
      if (input==1||input==4||input==7) {
        array = putFinger(input, 'L', array)
        result += 'L'
      } else if (input==3||input==6||input==9) {
        array = putFinger(input, 'R', array)
        result += 'R'
      } else if (input==2||input==5||input==8||input==0) {
        let finger = whatFinger(input, array, hand)
        array = putFinger(input, finger, array)
        result += finger
      }
    }
    return result
}

// 어떤 위치에 L또는 R을 삽입하고 원래 있던 것은 없애주는 함수
function putFinger(n, finger, array) {
  // 기존의 'L' 없애기
  for (let i=0;i<4;i++) {
    let line = array[i]
    for (let j=0;j<3;j++) {
      if (line[j] == finger) {
        line[j] = 'N'
      }
    }
  }
  let row = locations[n][0]
  let column = locations[n][1]

  array[row][column] = finger
  return array
}

// 임의의 숫자 버튼과 각 손가락과의 거리를 검사해서 L, R 중 더 가까운 것은 출력, 같으면 hand를 출력
function whatFinger(n, array, hand) {
  // 숫자키의 좌표
  let num_loc = locations[n]
  // 왼손 좌표
  // 오른손 좌표
  let left_loc
  let right_loc
  for (let i=0;i<4;i++) {
    let line = array[i]
    for (let j=0;j<3;j++) {
      if (line[j] == 'L') {
        left_loc = [i, j]
      }
      if (line[j] == 'R') {
        right_loc = [i, j]
      }
    }
  }
  // 좌표 사이의 거리 function
  function distance(a, b) {
    return Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1])
  }
  // 왼 거리
  let left_dist = distance(num_loc, left_loc)
  // 오른 거리
  let right_dist = distance(num_loc, right_loc)
  // 왼 거리가 짧으면 L 리턴
  if (left_dist < right_dist) return 'L'
  // 오른 거리가 짧으면 R 리턴
  if (left_dist > right_dist) return 'R'
  // 같으면 hand 리턴
  if (left_dist == right_dist) {
    if (hand == 'right') return 'R'
    if (hand == 'left') return 'L'
  }
}
