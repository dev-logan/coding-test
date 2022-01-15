function solution(new_id) {
    let id = new_id
    // 소문자로
    .toLowerCase()
    // 소문자, 숫자, 특정 문자 아닌 부분 제거
    .replace(/[^a-z0-9-_.]/g, '')
    // 연속된 .을 하나로
    .replace(/\.{2,}/g, '.')
    // 양끝의 . 제거
    .replace(/^\.|\.$/g, '')
    
    // id가 빈 문자가 되면 a로 만듦
    if (id == '') id = 'a'
    // 15글자로 제한하고 끝의 . 지움
    if (id.length >= 16) {
      id = id.substr(0,15).replace(/\.$/g, '')
    }
    // 한글자와 두글자인 경우 끝글자 반복
    if (id.length == 1) id = id.repeat(3)
    if (id.length == 2) id = id + id[1]

    return id
}
