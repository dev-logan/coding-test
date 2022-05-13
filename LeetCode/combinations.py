n = 4
k = 2

from itertools import combinations

answer = []
for c in combinations([i for i in range(1, n + 1)], k):
    answer.append(list(c))
    
print(answer)
