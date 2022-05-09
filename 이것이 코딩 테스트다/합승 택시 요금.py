n = 6
s = 4
a = 6
b = 2
fares = [[4, 1, 10],
         [3, 5, 24],
         [5, 6, 2],
         [3, 1, 41],
         [5, 1, 24],
         [4, 6, 50],
         [2, 4, 66],
         [2, 3, 22],
         [1, 6, 25]]

INF = int(1e9)
graph = [[INF] * (n + 1) for _ in range(n + 1)]

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == j:
            graph[i][j] = 0

for fare in fares:
    x, y, c = fare
    graph[x][y] = c
    graph[y][x] = c

for k in range(1, n+1):
    for i in range(1, n+1):
        for j in range(1, n+1):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

minimum_cost = INF
for k in range(1, n+1):
    cost = graph[s][k] + graph[k][a] + graph[k][b]
    if cost < minimum_cost:
        minimum_cost = cost

print(minimum_cost)