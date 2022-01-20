// https://programmers.co.kr/learn/courses/30/lessons/42839


function solution(numbers) {
  let split_numbers = numbers.split('')

  let permutations = []
  for (let i = 1; i <= split_numbers.length; i++) {
    permutations.push(...getPermutation(split_numbers, i))
  }
  let perm_nums = permutations.map(x => Number(x.join('')))
  let unique_perm_nums = Array.from(new Set(perm_nums)).sort((a,b) => a-b)

  let cnt = 0
  for (let i = 0; i < unique_perm_nums.length; i++) {
    if (isPrime(unique_perm_nums[i])) cnt++
  }
  return cnt
}





function isPrime(num) {
  if (num == 0 | num == 1) return false
  if (num == 2) return true
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false
  }
  return true
}





function getPermutation(arr, num) {
  let result = []
  if (num === 1) return arr.map((value) => [value])

  arr.forEach((fixed, index, origin) => {
    let rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
    let permutation = getPermutation(rest, num - 1)
    let attached = permutation.map((x) => [fixed, ...x])
    result.push(...attached)
  })
  return result
}
