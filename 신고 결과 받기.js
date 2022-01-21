// https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    let report_set = [...new Set(report)] //  중복된 신고 제거
    let report_pairs = report_set.map(x => x.split(' '))

    let report_dict = {}  //  {사용자 : [신고한 리스트]}
    let report_number = {}  //  {사용자 : 신고 당한 수}
    for (let pair of report_pairs) {
      let name = pair[0]
      let report = pair[1]
      if (report_dict[name]) {
        report_dict[name].push(report)
      } else {
        report_dict[name] = [report]
      }

      if (report_number[report]) {
        report_number[report]++
      } else {
        report_number[report] = 1
      }
    }

    let banned_users = Object.keys(report_number).reduce((banned, key) => { //  [정지 당한 사용자 목록]
      if (report_number[key] >= k) {
        banned.push(key)
      }
      return banned
    },[])

    let mails = []
    for (let id of id_list) {
      if (!report_dict[id]) {
        mails.push(0)
        continue
      }
      let mail = report_dict[id].reduce((acc, v) => {
        if (banned_users.includes(v)) {
          acc++
        }
        return acc
      },0)
      mails.push(mail)
    }
    return mails
}
