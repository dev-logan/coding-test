S = ["bdafg", "ceagi"]

n = len(S)
m = len(S[0])

answer = []
for position in range(m):
    characters = []
    end_condition = False
    for i in range(n):
        characters.append((S[i][position], i))
    characters.sort()
    for i in range(n - 1):
        if characters[i][0] == characters[i + 1][0]:
            answer.append(characters[i][1])
            answer.append(characters[i + 1][1])
            answer.append(position)
            end_condition = True
            break
    if end_condition:
        break

print(answer)