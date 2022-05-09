from collections import defaultdict
from bisect import bisect_left

info = ["java backend junior pizza 150",
        "python frontend senior chicken 210",
        "python frontend senior chicken 150",
        "cpp backend senior pizza 260",
        "java backend junior chicken 80",
        "python backend senior chicken 50"]
query = ["java and backend and junior and pizza 100",
         "python and frontend and senior and chicken 200",
         "cpp and - and senior and pizza 250",
         "- and backend and senior and - 150",
         "- and - and - and chicken 100",
         "- and - and - and - 150"]


splited_info = list(map(lambda x: x.split(), info))
splited_query = list(map(lambda x: x.split(' and '), query))

for info in splited_info:
    info[-1] = int(info[-1])

dict = defaultdict(list)
for i in splited_info:
    a, b, c, d, e = i
    for j in [a, '-']:
        for k in [b, '-']:
            for l in [c, '-']:
                for m in [d, '-']:
                    dict[(j, k, l, m)].append(e)

for v in dict.values():
    v.sort()

answer = []
for q in splited_query:
    lang, job, career, food_score = q
    food, score = food_score.split()
    score = int(score)

    array = dict[(lang, job, career, food)]
    left = bisect_left(array, score)
    answer.append(len(array) - left)

print(answer)
