from collections import deque
import sys
sys.stdin = open('./dev/stdin', 'r')

n, m = map(int, input().split())
graph = [list(map(int, input())) for _ in range(n)]

count = 0

di = [-1, 0, 1, 0]
dj = [0, 1, 0, -1]

for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            count += 1
            queue = deque([(i, j)])
            graph[i][j] = 1
            while queue:
                y, x = queue.popleft()
                for direction in range(4):
                    new_y = y + di[direction]
                    new_x = x + dj[direction]
                    if new_y < 0 or new_y >= n or new_x < 0 or new_x >= m:
                        continue
                    if graph[new_y][new_x] == 1:
                        continue
                    queue.append((new_y, new_x))
                    graph[new_y][new_x] = 1

print(count)


# 답안지
def dfs(x, y):
    if x <= -1 or x >= n or y <= -1 or y >= m:
        return False
    if graph[x][y] == 0:
        graph[x][y] = 1
        dfs(x-1, y)
        dfs(x, y-1)
        dfs(x+1, y)
        dfs(x, y+1)
        return True
    return False


result = 0
for i in range(n):
    for j in range(m):
        if dfs(i, j) == True:
            result += 1

print(result)
