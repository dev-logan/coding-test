function solution(s) {
    let ss = s.toLowerCase().split(' ')

    let result = ''
    for (let i in ss) {
      let word = ss[i]
      let new_word = ''
      for (let j in word) {
        if (j%2 == 0) {
          new_word += word[j].toUpperCase()
        } else {
          new_word += word[j]
        }
      }
      result += new_word
      if (i != ss.length - 1) {
        result += ' '
      }
    }

    return result
}
