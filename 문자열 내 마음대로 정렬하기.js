function solution(strings, n) {
    // n번째 글자가 같은 경우에 대비해서 미리 sort 한다
    strings.sort()
    // sort 안의 function이 0보다 크면 b, a로 정렬, 0보다 작으면 a, b로 정렬, 0이면 놔둔다
    return strings.sort(function(a, b) {
      if (a[n] < b[n]) {
        return -1;
      }
      if (a[n] > b[n]) {
        return 1;
      }
      // 같을 경우
      return 0;
    })
}
