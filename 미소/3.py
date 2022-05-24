N = 3
R = [2, 1, 0, 2]
C = [0, 2, 1, 2]

graph = [[0] * N for _ in range(N)]

bomb_num = len(R)

for i in range(bomb_num):
    graph[R[i]][C[i]] = "B"

dy = [-1, -1, -1, 0, 1, 1, 1, 0]
dx = [-1, 0, 1, 1, 1, 0, -1, -1]

for y in range(N):
    for x in range(N):
        if graph[y][x] == 0:
            count = 0
            for i in range(8):
                ny = y + dy[i]
                nx = x + dx[i]
                
                if ny < 0 or ny >= N or nx < 0 or nx >= N:
                    continue
                
                if graph[ny][nx] == 'B':
                    count += 1
            graph[y][x] = str(count)

for line in graph:
    print(''.join(line))