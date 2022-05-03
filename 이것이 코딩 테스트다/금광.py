import sys
sys.stdin = open('./dev/stdin', 'r')
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n, m = map(int, input().split())
    gold = iter(map(int, input().split()))
    graph = [[0] * m for _ in range(n)]
    dp = [[0] * m for _ in range(n)]
    for i in range(n):
        for j in range(m):
            graph[i][j] = next(gold)
            if j == 0:
                dp[i][j] = graph[i][j]
    for j in range(1, m):
        for i in range(n):
            previous_i = [i - 1, i, i + 1]
            for pi in previous_i:
                if pi < 0 or pi >= n:
                    continue
                dp[i][j] = max(dp[i][j], dp[pi][j - 1] + graph[i][j])
    print(max(list(map(lambda x: x[-1], dp))))