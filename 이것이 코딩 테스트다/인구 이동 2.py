from collections import deque
import sys
sys.stdin = open('./dev/stdin', 'r')

n, l, r = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

count = 0
while True:
    visited = [[False] * n for _ in range(n)]
    groups = []
    for i in range(n):
        for j in range(n):
            if not visited[i][j]:
                group = []

                queue = deque([(i, j)])
                visited[i][j] = True
                group.append((i, j))
                while queue:
                    v = queue.popleft()
                    y, x = v
                    for direction in range(4):
                        ny = y + dy[direction]
                        nx = x + dx[direction]
                        if ny < 0 or ny >= n or nx < 0 or nx >= n:
                            continue
                        if not visited[ny][nx] and l <= abs(graph[y][x] - graph[ny][nx]) <= r:
                            queue.append((ny, nx))
                            visited[ny][nx] = True
                            group.append((ny, nx))

                groups.append(group)

    if len(groups) == n * n:
        break

    for group in groups:
        sum = 0
        for location in group:
            sum += graph[location[0]][location[1]]
        for location in group:
            graph[location[0]][location[1]] = sum // len(group)

    count += 1

print(count)
