function solution(nums) {
    // 세가지 수를 조합하여 더하는 경우들을 results에 저장
    let results = []
    for (let i=0;i<nums.length-2;i++){
      for (let j=i+1;j<nums.length-1;j++){
        for (let k=j+1;k<nums.length;k++){
          results.push(nums[i] + nums[j] + nums[k])
        }
      }
    }
    // results 내에서 소수가 아닌 수들의 개수 = cnt
    let cnt = 0
    for (let i=0;i<results.length;i++) {
      let result = results[i]
      for (let j=2;j<result;j++) {
        if (result % j == 0) {
          cnt++
          break
        }
      }
    }
    return results.length - cnt
}
