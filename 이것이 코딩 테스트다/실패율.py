N = 4
stages = [4, 4, 4, 4, 4]

rate = []
total = len(stages)
for i in range(1, N+1):
    stuck = stages.count(i)
    rate.append((i, stuck / total if total != 0 else 0))
    total -= stuck

rate.sort(key=lambda x: (-x[1], x[0]))

print(list(map(lambda x: x[0], rate)))
