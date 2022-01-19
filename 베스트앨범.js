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
