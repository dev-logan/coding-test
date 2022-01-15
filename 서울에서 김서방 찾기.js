function solution(seoul) {
    //seoul array 내에서 값이 'Kim'인 element의 첫번째 index 값 반환
    let idx = seoul.findIndex(name => name == 'Kim')
    // 올바른 형식으로 return
    return '김서방은 '+idx+'에 있다'
}
