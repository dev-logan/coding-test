import sys
sys.stdin = open('./dev/stdin', 'r')

n, l, r = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

visited = [[False] * n for _ in range(n)]

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]


def dfs(v):
    global graph, visited, dy, dx
    y, x = v
    visited[y][x] = True
    for direction in range(4):
        ny = y + dy[direction]
        nx = x + dx[direction]
        if ny < 0 or ny >= n or nx < 0 or nx >= n:
            continue
        if l <= abs(graph[y][x] - graph[ny][nx]) <= r and not visited[ny][nx]:
            dfs((ny,nx))



for i in range(n):
    for j in range(n):
        if not visited[i][j]:
            dfs((i, j))
