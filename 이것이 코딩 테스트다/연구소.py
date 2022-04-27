from collections import deque
from itertools import combinations
import copy
import sys
sys.stdin = open('./dev/stdin', 'r')

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

zero_locations = []
for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            zero_locations.append((i, j))

dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

max_count = 0

for combination in combinations(zero_locations, 3):
    copied_graph = copy.deepcopy(graph)
    for location in combination:
        copied_graph[location[0]][location[1]] = 1
    for i in range(n):
        for j in range(m):
            if copied_graph[i][j] == 2:
                queue = deque()
                queue.append((i, j))
                while queue:
                    y, x = queue.popleft()
                    for direction in range(4):
                        ny = y + dr[direction]
                        nx = x + dc[direction]
                        if ny < 0 or ny >= n or nx < 0 or nx >= m:
                            continue
                        if copied_graph[ny][nx] == 0:
                            queue.append((ny,nx))
                            copied_graph[ny][nx] = 2
    count = 0
    for i in range(n):
        for j in range(m):
            if copied_graph[i][j] == 0:
                count += 1
    if count > max_count:
        max_count = count

print(max_count)