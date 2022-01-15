function solution(arr)
{
    let result = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i+1]) result.push(arr[i])
    }
    return result
}

// for (let i in arr)를 쓰니까 왜인지 막혔음
