import sys
sys.stdin = open('./dev/stdin', 'r')
input = sys.stdin.readline

n = int(input())
graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

dp = []
for i in range(1, n + 1):
    dp.append([0] * i)

dp[0][0] = graph[0][0]

for i in range(1, n):
    for j in range(i + 1):
        previous_j = [j - 1, j]
        for pj in previous_j:
            if 0 <= pj < i:
                dp[i][j] = max(dp[i][j], dp[i - 1][pj] + graph[i][j])
print(max(dp[-1]))