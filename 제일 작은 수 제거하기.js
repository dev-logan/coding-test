function solution(arr) {
    if (arr.length == 1) return [-1]        //  원소가 하나인 array가 주어질 때

    let min = Math.min.apply(null, arr)     //  최소값 알기
    let idx = arr.indexOf(min)              //  최소값의 좌표 알기
    arr.splice(idx, 1)                      //  최소값 삭제
    return arr
