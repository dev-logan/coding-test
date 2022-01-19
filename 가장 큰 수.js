//https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  let answer = numbers
  // 각각을 string으로 바꿔서 세개 이어붙인 모양을 바꿈
  .map(x => String(x).repeat(3))
  .sort()
  .reverse()
  // 정렬 후 이어붙인 것을 다시 1개로 만듦
  .map(x => x.substr(0,x.length/3))
  .join('')

  // 0만 입력되는 특수한 경우 고려
  if (answer == '0'.repeat(numbers.length)) return '0'
  return answer
}





// 다른 풀이
function solution(numbers) {
  let answer = numbers.map(v=>v+'') //  문자로 바꿔줌
                      .sort((a,b) => (b+a)*1 - (a+b)*1) //  a와 b를 앞뒤로 더하고 숫자로 바꿨을 때, 더 큰 경우를 앞으로 👍
                      .join('');

  return answer[0]==='0'?'0':answer;
}
