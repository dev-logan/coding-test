from collections import deque

board = [[0, 0, 0, 1, 1], [0, 0, 0, 1, 0], [
    0, 1, 0, 1, 1], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0]]

n = len(board)

for i in range(n):
    for j in range(n):
        board[i][j] *= -1

# 북, 동, 남, 서
dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

queue = deque()

# time, y, x, direction
queue.append((0, 0, 0, 1))
queue.append((0, 0, 1, 3))

while queue:
    time, y, x, d = queue.popleft()
    if board[y][x] == 0:
        board[y][x] = time
    # if board[y][x] > 0:
    #     board[y][x] = min(board[y][x], time)
    if y == n-1 and x == n-1:
        break
    # if y+dy[d] >= 0 and y+dy[d] < n and x+dx[d] >= 0 and x+dx[d] < n and board[y+dy[d]][x+dx[d]] == 0:
    #     board[y+dy[d]][x+dx[d]] = time
    #     if y+dy[d] == n-1 and x+dx[d] == n-1:
    #         break
    to_visit = []
    # if dy[d] == 0:
    #     to_visit = [(y, x + dx[d], d), (y, x - dx[d], d), (y + 1, x +
    #                                     dx[d], d+1 if d != 3 else 0), (y - 1, x + dx[d], d-1 if d != 0 else 3)]
    # else:
    #     to_visit = [(y + dy[d], x, d), (y - dy[d], x, d), (y + dy[d],
    #                                     x + 1, d+1 if d != 3 else 0), (y + dy[d], x - 1, d-1 if d != 0 else 3)]

    if d == 0:
        to_visit.append((y+1, x, 0))
        to_visit.append((y-1, x, 0))
        to_visit.append((y-1, x-1, 1))
        to_visit.append((y-1, x+1, 3))
    elif d == 1:
        to_visit.append((y, x+1, 1))
        to_visit.append((y, x-1, 1))
        to_visit.append((y-1, x+1, 2))
        to_visit.append((y+1, x+1, 0))
    elif d == 2:
        to_visit.append((y+1, x, 2))
        to_visit.append((y-1, x, 2))
        to_visit.append((y+1, x-1, 1))
        to_visit.append((y+1, x+1, 3))
    elif d == 3:
        to_visit.append((y, x+1, 3))
        to_visit.append((y, x-1, 3))
        to_visit.append((y-1, x-1, 2))
        to_visit.append((y+1, x-1, 0))

    for location in to_visit:
        ny, nx, nd = location
        if ny < 0 or ny >= n or nx < 0 or nx >= n:
            continue
        if board[ny][nx] >= 0:
            queue.append((time + 1, ny, nx, nd))
            # if board[ny][nx] == 0:
            #     board[ny][nx] = time + 1
            #     if ny == n-1 and nx == n-1:
            #         end_condition = True
            #         break
            # if board[ny+dy[nd]][nx+dx[nd]] == 0:
            #     board[ny+dy[nd]][nx+dx[nd]] = time + 1
            #     if ny+dy[nd] == n-1 and nx+dx[nd] == n-1:
            #         end_condition = True
            #         break

print(board)
