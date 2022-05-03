import sys
sys.stdin = open('./dev/stdin', 'r')
input = sys.stdin.readline

n, m = map(int, input().split())
coins = []
for _ in range(n):
    coins.append(int(input()))

dp = [10001] * 10001
dp[0] = 0

for i in range(n):
    for j in range(coins[i], m + 1):
        if dp[j - coins[i]] != 10001:
            dp[j] = min(dp[j], dp[j - coins[i]] + 1)

if dp[m] != 10001:
    print(dp[m])
else:
    print(-1)