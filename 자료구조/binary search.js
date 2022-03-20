function binarySearch(left, right) {
    while (left + 1 != right) {
        let mid = parseInt((left + right) / 2);

        // left와 right이 대체되는 조건을 설정
        if (cutoff(mid) >= M) left = mid;
        else right = mid;
    }
    return left;
}