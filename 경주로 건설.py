from collections import deque

board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

n = len(board)

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

# y, x, 방향, 가격
queue = deque()
queue.append((0, 0, -1, 0))

price_map = [[-1] * n for _ in range(n)]

while queue:
    y, x, d, price = queue.popleft()

    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]

        if ny < 0 or ny >= n or nx < 0 or nx >= n:
            continue
        
        if board[ny][nx] == 1:
            continue

        if d == i or d == -1:
            price += 100
        else:
            price += 600

        if price_map[ny][nx] != -1 and price_map[ny][nx] < price:
            continue

        queue.append((ny, nx, i, price))
        price_map[ny][nx] = price

print(price_map)

# def solution(board):
#     n = len(board)
#     opened = [(0,0,-1,0)] # y, x, direction, cost
#     closed = [[-1 for _ in range(n)] for _ in range(n)]

#     answer = -1
#     while opened:
#         y, x, d, c = opened.pop(0)
#         if (y, x) == (n-1, n-1) and (answer == -1 or answer > c):
#             answer = c

#         neighbors = [(y, x-1), (y, x+1), (y-1, x), (y+1, x)]
#         for direction, (ny, nx) in enumerate(neighbors):
#             # boundary
#             if ny <= -1 or ny >= n or nx <= -1 or nx >= n:
#                 continue

#             # wall
#             if board[ny][nx]:
#                 continue

#             # visited and cheaper
#             cost = c + (100 if d == direction or d == -1 else 600)
#             if closed[ny][nx] != -1 and closed[ny][nx] < cost:
#                 continue

#             opened.append((ny, nx, direction, cost))
#             closed[ny][nx] = cost
#     print(closed)
#     return answer

# solution(board)
