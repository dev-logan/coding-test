// 간단해 보이는데 매우 헷갈림. 아직도 for문으로 왜 안 풀리는지 모르겠음.
// h번 이상 인용된 논문이 h편 이상

function solution(citations) {
    let sorted_citations = citations.sort((a, b) => b - a)
    let i = 0
    while (i + 1 <= sorted_citations[i]) i++
    return i
}




// 처음 풀은 풀이. 이해 못하고 일단 풀은 것 같다.
function solution(citations) {
    let sorted_citations = citations.sort((a, b) => b - a)

    let counts = {}
    for (let i = 0; i < sorted_citations.length; i++) {
      counts[sorted_citations[i]] = i+1
    }
    let count_lists = []
    for (let key in counts) {
      count_lists.push([Number(key), counts[key]])
    }
    return Math.max(...count_lists.map(x => Math.min(...x)))
}
