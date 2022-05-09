import sys
sys.stdin = open('./dev/stdin', 'r')
input = sys.stdin.readline

n = int(input())
array = []
for _ in range(n):
    array.append(tuple(map(int, input().split())))

reverse_array = array[::-1]
dp = [0] * n

for i, tuple in enumerate(reverse_array):
    t, p = tuple
    if t > i + 1:
        dp[i] = dp[i - 1]
    else:
        dp[i] = max(dp[i - 1], p + dp[i - t])

print(dp[-1])