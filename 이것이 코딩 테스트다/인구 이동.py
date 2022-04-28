import sys
sys.stdin = open('./dev/stdin', 'r')

n, l, r = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]


def dfs(v, visited, group):
    global graph, dy, dx
    group.append(v)
    y, x = v
    visited[y][x] = True
    for direction in range(4):
        ny = y + dy[direction]
        nx = x + dx[direction]
        if ny < 0 or ny >= n or nx < 0 or nx >= n:
            continue
        if l <= abs(graph[y][x] - graph[ny][nx]) <= r and not visited[ny][nx]:
            dfs((ny, nx), visited, group)


count = 0
while True:
    visited = [[False] * n for _ in range(n)]
    groups = []
    no_more_move = False
    for i in range(n):
        for j in range(n):
            if not visited[i][j]:
                group = []
                dfs((i, j), visited, group)
                groups.append(group)

    if len(groups) == n * n:
        break

    for group in groups:
        sum = 0
        for location in group:
            sum += graph[location[0]][location[1]]
        for location in group:
            graph[location[0]][location[1]] = sum // len(group)

    if no_more_move:
        break
    count += 1

print(count)

# 재귀가 너무 깊게 들어가는 문제 발생.