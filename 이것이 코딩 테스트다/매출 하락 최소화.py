sales = [14, 17, 15, 18, 19, 14, 13, 16, 28, 17]
links = [[10, 8], [1, 9], [9, 7], [5, 4], [
    1, 5], [5, 10], [10, 6], [1, 3], [10, 2]]

sales.insert(0, 0)

n = len(sales)

graph = [[] for _ in range(n + 1)]

for link in links:
    graph[link[0]].append(link[1])

