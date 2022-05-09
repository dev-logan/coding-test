n = 6
paths = [[1, 2, 3], [2, 3, 5], [2, 4, 2], [2, 5, 4],
         [3, 4, 4], [4, 5, 3], [4, 6, 1], [5, 6, 1]]
gates = [1, 3]
summits = [5]

import heapq
INF = int(1e9)

graph = [[] for _ in range(n+1)]
intensity = [INF] * (n+1)

for path in paths:
    a, b, c = path
    graph[a].append((b,c))
    graph[b].append((a,c))

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    intensity[start] = 0
    while q:
        inten, now = heapq.heappop(q)
        if intensity[now] < inten:
             continue
        for i in graph[now]:
            cost = min(inten, i[1])
            if cost < intensity[i[0]]:
                intensity[i[0]] = i[1]
                heapq.heappush(q, (cost, i[0]))
                 
dijkstra(1)

print(intensity)