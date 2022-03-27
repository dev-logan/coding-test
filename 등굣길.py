m = 4
n = 3
puddles = [[2, 2]]

dp = [[None for x in range(m)] for y in range(n)]
dp[0][0] = 1
for puddle in puddles:
    dp[puddle[1] - 1][puddle[0] - 1] = 0

for y in range(n):
    for x in range(m):
        if (y == 0 and x == 0):
            continue
        if (dp[y][x] == 0):
            continue
        if y == 0:
            dp[y][x] = dp[y][x-1]
            continue
        if x == 0:
            dp[y][x] = dp[y-1][x]
            continue
        dp[y][x] = dp[y][x-1] + dp[y-1][x]

print(dp[n-1][m-1] % 1000000007)


# 함수 형태
def solution(m, n, puddles):
    dp = [[None for x in range(m)] for y in range(n)]
    dp[0][0] = 1
    for puddle in puddles:
        dp[puddle[1] - 1][puddle[0] - 1] = 0

    for y in range(n):
        for x in range(m):
            if (y == 0 and x == 0):
                continue
            if (dp[y][x] == 0):
                continue
            if y == 0:
                dp[y][x] = dp[y][x-1]
                continue
            if x == 0:
                dp[y][x] = dp[y-1][x]
                continue
            dp[y][x] = dp[y][x-1] + dp[y-1][x]

    return dp[n-1][m-1] % 1000000007
