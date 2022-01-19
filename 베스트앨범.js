function solution(genres, plays) {
    // key: 장르, value: [play 횟수, 곡 번호]
    let genre_plays = {}
    for (let i=0;i<genres.length;i++) {
      let genre = genres[i]
      let play = plays[i]
      if (Object.keys(genre_plays).includes(genre)) {
        genre_plays[genre].push([play,i])
      } else {
        genre_plays[genre] = [[play,i]]
      }
    }

    // [장르, 총 play 횟수]
    let genre_tot = []
    for (let key in genre_plays) {
      let tot = genre_plays[key].reduce((a,b) => a+b[0],0)
      genre_tot.push([key, tot])
    }
    // 총 play 횟수로 정렬
    let sorted_genre_tot = genre_tot.sort((a,b) => b[1]-a[1])
    // 총 play 횟수로 정렬된 genre 목록
    let sorted_genres = []
    for (let i=0;i<sorted_genre_tot.length;i++) {
      sorted_genres.push(sorted_genre_tot[i][0])
    }
    // 각 장르의 [play 횟수, 곡 번호]로 이루어진 array
    let playnumber = []
    for (let i=0;i<sorted_genres.length;i++) {
      let genre = sorted_genres[i]
      playnumber.push(genre_plays[genre])
    }
    // 각 장르의 목록에서 play 수가 많은 두개씩 추출
    for (let i=0;i<playnumber.length;i++) {
      let oneplay = playnumber[i]
      oneplay.sort((a,b) => b[0]-a[0])
      playnumber[i] = oneplay.slice(0,2)
    }
    // index를 차례대로 저장
    let answer = []
    for (let i=0;i<playnumber.length;i++) {
      let number = playnumber[i]
      for (let j=0;j<number.length;j++) {
        answer.push(number[j][1])
      }
    }
    return answer
}





// forEach, map, sort, filter를 활용한 다른 풀이
// key: 장르, value: 장르별 총 플레이 수
var dic = {};
genres.forEach((t, i) => {
  dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
});

function solution(genres, plays) {
  var dupDic = {};
  return genres
    // {장르, 카운트, 인덱스}
    .map((t, i) => ({ genre: t, count: plays[i], index: i }))
    // 장르는 총 플레이 수로 정렬, 곡 별 플레이 수 정렬, 인덱스로 정렬
    .sort((a, b) => {
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    })
    // 장르별로 두개씩만 남김
    .filter(t => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    // 인덱스만 추출
    .map(t => t.index);
}
