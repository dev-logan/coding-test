import sys

sys.stdin = open("./dev/stdin", "r")
input = sys.stdin.readline

n, m, k = map(int, input().split())

graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

# 위, 아래, 왼쪽, 오른쪽
dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]

directions = list(map(int, input().split()))

priorities = []
for i in range(m):
    priority = []
    for j in range(4):
        priority.append(list(map(int, input().split())))
    priorities.append(priority)

# 그 칸에 위치한 상어, 상어가 보고 있는 방향, 냄새의 주인, 냄새 남은 시간
for i in range(n):
    for j in range(n):
        if graph[i][j] == 0:
            graph[i][j] = [0, 0, 0, 0]
        else:
            shark = graph[i][j]
            graph[i][j] = [shark, directions[shark - 1], shark, k]

duration = 0
for _ in range(1001):
    duration += 1

    # 상어 있는 칸 찾기
    cur_sharks = []
    for y in range(n):
        for x in range(n):
            if graph[y][x][0] != 0:
                cur_sharks.append([y, x])

    # 각 상어 별로 진행
    for cur_shark in cur_sharks:
        y, x = cur_shark
        shark, direction, smell, time = graph[y][x]

        # 다음 탐색할 방향의 우선 순위
        next_directions = priorities[shark - 1][direction - 1]

        # 상하 좌우에 냄새가 없는 칸이 있는지 검사
        empty_around = False  # True면 주변에 빈칸이 존재함
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]

            if ny < 0 or ny >= n or nx < 0 or nx >= n:
                continue

            if graph[ny][nx][2] == 0:
                empty_around = True
                break

        # 주위에 빈칸이 존재할 경우
        if empty_around:
            for next_d in next_directions:
                ny = y + dy[next_d - 1]
                nx = x + dx[next_d - 1]

                if ny < 0 or ny >= n or nx < 0 or nx >= n:
                    continue

                if graph[ny][nx][2] == 0:
                    # 상어의 이동이 실행됨
                    if graph[ny][nx][0] > 0 and graph[ny][nx][0] < shark:
                        graph[y][x][0] = 0
                        graph[y][x][1] = 0
                        break
                    graph[ny][nx][0] = shark
                    graph[ny][nx][1] = next_d
                    graph[y][x][0] = 0
                    graph[y][x][1] = 0
                    break
        # 주위에 빈칸이 없을 경우
        else:
            for next_d in next_directions:
                ny = y + dy[next_d - 1]
                nx = x + dx[next_d - 1]

                if ny < 0 or ny >= n or nx < 0 or nx >= n:
                    continue

                if graph[ny][nx][2] == shark:
                    # 상어의 이동이 실행됨
                    if graph[ny][nx][0] > 0 and graph[ny][nx][0] < shark:
                        graph[y][x][0] = 0
                        graph[y][x][1] = 0
                        break
                    graph[ny][nx][0] = shark
                    graph[ny][nx][1] = next_d
                    graph[y][x][0] = 0
                    graph[y][x][1] = 0
                    break

    # 시간의 흐름
    for i in range(n):
        for j in range(n):
            if graph[i][j][3] > 0:
                graph[i][j][3] -= 1
            if graph[i][j][3] == 0:
                graph[i][j][2] = 0

    # 현재 상어가 있는 칸에 냄새 부여
    for y in range(n):
        for x in range(n):
            if graph[y][x][0] != 0:
                shark = graph[y][x][0]
                graph[y][x][2] = shark
                graph[y][x][3] = k

    maximum_shark_number = 0
    for y in range(n):
        for x in range(n):
            if graph[y][x][0] > maximum_shark_number:
                maximum_shark_number = graph[y][x][0]
    if maximum_shark_number == 1:
        break

if duration == 1001:
    print(-1)
else:
    print(duration)
