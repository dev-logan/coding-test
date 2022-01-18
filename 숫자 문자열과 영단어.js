function solution(s) {
    let num_words = ['zero','one','two','three','four','five','six','seven','eight','nine']
    // key: 숫자, value: index인 dictionary
    let num_indices = {}
    for (let i=0;i<num_words.length;i++) {
      let num_word = num_words[i]
      // 각 단어의 모든 index를 찾기 위한 regex
      let regex = new RegExp(num_word,'g')
      let result
      while (result = regex.exec(s)) {
        num_indices[result.index] = i
      }
      // 단어 말고 숫자의 위치도 찾아준다
      let regexn = new RegExp(i,'g')
      let resultn
      while (resultn = regexn.exec(s)) {
        num_indices[resultn.index] = i
      }
    }
    // dictionary의 value값만 모아서 숫자로 표현
    return Number(Object.values(num_indices).join(''))
}


// 다른 풀이
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    
    // 단어로 split하고 join을 하면 split된 자리에 i가 들어간다
    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }
  
    return Number(answer);
}


// 다른 풀이
function solution(s) {
    // 정규표현식을 활용한 replace
    s = s.replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9)
    return parseInt(s);
}
