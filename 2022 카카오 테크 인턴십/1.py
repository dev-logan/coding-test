from collections import defaultdict

survey = ["AN", "CF", "MJ", "RT", "NA"]	
choices = [5, 3, 2, 7, 5]	

n = len(survey)
dict = defaultdict(int)

for i in range(n):
    if choices[i] < 4:
        type = survey[i][0]
        score = 0
        if choices[i] == 1:
            score = 3
        if choices[i] == 2:
            score = 2
        if choices[i] == 3:
            score = 1
        dict[type] += score
    if choices[i] > 4:
        type = survey[i][1]
        score = 0
        if choices[i] == 5:
            score = 1
        if choices[i] == 6:
            score = 2
        if choices[i] == 7:
            score = 3
        dict[type] += score
    else:
        continue

answer = ''
if dict['R'] >= dict['T']:
    answer += 'R'
else:
    answer += 'T'
if dict['C'] >= dict['F']:
    answer += 'C'
else:
    answer += 'F'
if dict['J'] >= dict['M']:
    answer += 'J'
else:
    answer += 'M'
if dict['A'] >= dict['N']:
    answer += 'A'
else:
    answer += 'N'

print(answer)