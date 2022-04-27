import copy
from itertools import combinations
import sys
sys.stdin = open('./dev/stdin', 'r')

n = int(input())
graph = [input().split(' ') for _ in range(n)]

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

def check(graph):
    global dy, dx
    for i in range(n):
        for j in range(n):
            if graph[i][j] == 'T':
                for direction in range(4):
                    ny = i
                    nx = j
                    while True:
                        ny += dy[direction]
                        nx += dx[direction]
                        if ny < 0 or ny >= n or nx < 0 or nx >= n:
                            break
                        if graph[ny][nx] == 'O':
                            break
                        elif graph[ny][nx] == 'S':
                            return False
    return True

spaces = []
for i in range(n):
    for j in range(n):
        if graph[i][j] == 'X':
            spaces.append((i,j))

check_test = False

for locations in combinations(spaces, 3):
    copied_graph = copy.deepcopy(graph)
    for location in locations:
        y, x = location
        copied_graph[y][x] = 'O'
        if check(copied_graph):
            check_test = True
        
if check_test:
    print('YES')
else:
    print('NO')