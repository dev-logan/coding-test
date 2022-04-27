from collections import deque
import sys
sys.stdin = open('./dev/stdin', 'r')

n, k = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
s, x, y = map(int, input().split())

queue = deque()

for i in range(1, k+1):
    for j in range(n):
        for k in range(n):
            if graph[j][k] == i:
                queue.append((0, i, j, k))

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

while queue:
    time, kind, i, j = queue.popleft()
    if time >= s:
        break
    for direction in range(4):
        ny = i + dy[direction]
        nx = j + dx[direction]
        if ny < 0 or ny >= n or nx < 0 or nx >= n:
            continue
        if graph[ny][nx] == 0:
            queue.append((time+1, kind, ny, nx))
            graph[ny][nx] = kind

print(graph[x-1][y-1])
