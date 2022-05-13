m = 6
n = 6
board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]

board = list(map(list, board))

while True:
    # O로 만들 곳의 좌표 저장
    to_zeros = []
    for y in range(m - 1):
        for x in range(n - 1):
            if board[y][x] == 0:
                continue
            if board[y][x] == board[y][x + 1] == board[y + 1][x] == board[y + 1][x + 1]:
                to_zeros.append([y, x])
                
    if len(to_zeros) == 0:
        break

    # O로 만듦
    for location in to_zeros:
        y, x = location
        board[y][x] = 0
        board[y][x + 1] = 0
        board[y + 1][x] = 0
        board[y + 1][x + 1] = 0

    # 블록 떨어짐
    for y in range(1,m):
        for x in range(n):
            if board[y][x] == 0:
                i = y
                j = x
                while i > 0:
                    board[i][j], board[i-1][j] = board[i-1][j], board[i][j]
                    i -= 1

count = 0
for y in range(m):
        for x in range(n):
            if board[y][x] == 0:
                count += 1
                
print(count)