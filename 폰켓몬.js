function solution(nums) {
    return Math.min(...[Array.from(new Set(nums)).length, nums.length/2]) //  unique한 폰켓몬의 수와 골라야 하는 폰켓몬 수 둘 중 작은 값이 정답
}
