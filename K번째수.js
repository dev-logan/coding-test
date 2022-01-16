function solution(array, commands) {
    let results = []
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i]
      let start = command[0]
      let end = command[1]
      let order = command[2]

      let result = array
      // 자르고
      .slice(start-1, end)
      // 정렬하고
      .sort((a,b) => a-b)
      // 고르고
      [order-1]

      results.push(result)
    }
    return results
}
