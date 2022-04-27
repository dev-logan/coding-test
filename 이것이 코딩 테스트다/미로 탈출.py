from collections import deque
import sys
sys.stdin = open('./dev/stdin', 'r')

n, m = map(int, input().split())
graph = [list(map(int, input())) for _ in range(n)]

queue = deque([(0, 0)])

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

while queue:
    y, x = queue.popleft()
    for i in range(4):
        new_y = y + dy[i]
        new_x = x + dx[i]
        if new_y < 0 or new_y >= n or new_x < 0 or new_x >= m:
            continue
        if graph[new_y][new_x] == 0:
            continue
        if graph[new_y][new_x] == 1:
            queue.append((new_y, new_x))
            graph[new_y][new_x] = graph[y][x] + 1

print(graph[n-1][m-1])
