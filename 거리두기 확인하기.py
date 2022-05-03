places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
          ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
          ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
          ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
          ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]

dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

answer = []

for place in places:
    temp = list(map(lambda x: 'xx'+x+'xx', place))
    temp.insert(0, 'xxxxxxxxx')
    temp.insert(0, 'xxxxxxxxx')
    temp.append('xxxxxxxxx')
    temp.append('xxxxxxxxx')
    graph = list(map(list, temp))

    check = True

    for i in range(2, 7):
        for j in range(2, 7):
            if graph[i][j] == 'P':
                for d in range(4):
                    ni = i + dr[d]
                    nj = j + dc[d]
                    if graph[ni][nj] == 'P':
                        check = False
                if graph[i-1][j+1] == 'P':
                    if graph[i + dr[0]][j + dc[0]] != 'X' or graph[i + dr[1]][j + dc[1]] != 'X':
                        check = False
                if graph[i+1][j+1] == 'P':
                    if graph[i + dr[1]][j + dc[1]] != 'X' or graph[i + dr[2]][j + dc[2]] != 'X':
                        check = False
                if graph[i+1][j-1] == 'P':
                    if graph[i + dr[2]][j + dc[2]] != 'X' or graph[i + dr[3]][j + dc[3]] != 'X':
                        check = False
                if graph[i-1][j-1] == 'P':
                    if graph[i + dr[3]][j + dc[3]] != 'X' or graph[i + dr[0]][j + dc[0]] != 'X':
                        check = False
                if graph[i-2][j] == 'P':
                    if graph[i + dr[0]][j + dc[0]] != 'X':
                        check = False
                if graph[i][j+2] == 'P':
                    if graph[i + dr[1]][j + dc[1]] != 'X':
                        check = False
                if graph[i+2][j] == 'P':
                    if graph[i + dr[2]][j + dc[2]] != 'X':
                        check = False
                if graph[i][j-2] == 'P':
                    if graph[i + dr[3]][j + dc[3]] != 'X':
                        check = False

    if check:
        answer.append(1)
    else:
        answer.append(0)

print(answer)