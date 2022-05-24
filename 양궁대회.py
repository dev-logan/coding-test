n = 10
info = [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]

from itertools import combinations_with_replacement

ryans = []
for com in combinations_with_replacement(range(11), n):
    ryan = [0] * 11
    for index in com:
        ryan[index] += 1

    total_a = 0
    total_r = 0
    for i in range(11):
        if info[i] == 0 and ryan[i] == 0:
            continue
        if info[i] >= ryan[i]:
            total_a += 10 - i
        else:
            total_r += 10 - i

    if total_a < total_r:
        ryans.append((total_r, ryan))

# if ryans == []:
#     return [-1]

ryans.sort(key=lambda x: (x[0], x[1][::-1]), reverse=True)

print(ryans)
print(ryans[0][1])