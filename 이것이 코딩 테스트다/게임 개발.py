import sys

sys.stdin = open('./dev/stdin', 'r')

n, m = map(int, input().split())
y, x, d = map(int, input().split())
map = [list(map(int, input().split())) for i in range(n)]

# 북, 동, 남, 서
dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

count = 0

while True:

    # 현재 서 있는 곳은 가본 칸으로
    if map[y][x] == 0:
        map[y][x] = 1
        count += 1

    # 주위 확인
    all_visited = True
    for i in range(4):
        if map[y+dy[i]][x+dx[i]] == 0:
            all_visited = False
            break
    if all_visited:
        if map[y-dy[d]][x-dx[d]] == 1:
            break
        y -= dy[d]
        x -= dx[d]
        continue

    # 왼쪽 칸 확인
    left_d = d - 1 if d != 0 else 3
    left_y = y + dy[left_d]
    left_x = x + dx[left_d]

    # 왼쪽이 가보지 않는 칸이라면
    if map[left_y][left_x] == 0:
        # 왼쪽으로 회전
        d = d - 1 if d != 0 else 3
        # 전진
        y += dy[d]
        x += dx[d]
    if map[left_y][left_x] == 1:
        d = d - 1 if d != 0 else 3

print(count)