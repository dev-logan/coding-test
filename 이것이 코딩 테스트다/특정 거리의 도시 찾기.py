from collections import deque
import sys
sys.stdin = open('./dev/stdin', 'r')

n, m, k, x = map(int, input().split())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)

distance = [-1] * (n+1)

queue = deque()
queue.append(x)

distance[x] = 0

while queue:
    v = queue.popleft()
    for i in graph[v]:
        if distance[i] == -1:
            queue.append(i)
            distance[i] = distance[v] + 1

found = False
for i, d in enumerate(distance):
    if d == k:
        print(i)
        found = True

if not found:
    print(-1)