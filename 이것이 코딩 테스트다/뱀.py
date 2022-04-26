import sys
sys.stdin = open('./dev/stdin', 'r')

n = int(input())
k = int(input())
apples = [tuple(map(int, input().split(' '))) for _ in range(k)]
l = int(input())
direction_changes = [tuple(map(lambda x: int(
    x) if not x.isalpha() else x, input().split(' '))) for _ in range(l)]

# 동, 남, 서, 북
dc = [1, 0, -1, 0]
dr = [0, 1, 0, -1]

# 초기 조건
row = 0
column = 0
direction = 0
time = 0
snake_list = [(0, 0)]

map = [[0] * n for _ in range(n)]
for apple in apples:
    map[apple[0]-1][apple[1]-1] = -1
map[row][column] = 1

while True:
    time += 1

    if row + dr[direction] < 0 or row + dr[direction] >= n or column + dc[direction] < 0 or column + dc[direction] >= n:
        break

    if map[row + dr[direction]][column + dc[direction]] == -1:
        map[row + dr[direction]][column + dc[direction]] = 1
        snake_list.append((row + dr[direction], column + dc[direction]))
    elif map[row + dr[direction]][column + dc[direction]] == 0:
        map[row + dr[direction]][column + dc[direction]] = 1
        snake_list.append((row + dr[direction], column + dc[direction]))
        tail = snake_list.pop(0)
        map[tail[0]][tail[1]] = 0

    elif map[row + dr[direction]][column + dc[direction]] == 1:
        break

    row = row + dr[direction]
    column = column + dc[direction]

    for change in direction_changes:
        if change[0] == time:
            if change[1] == 'D':
                direction = direction + 1 if direction != 3 else 0
            if change[1] == 'L':
                direction = direction - 1 if direction != 0 else 3

print(time)
