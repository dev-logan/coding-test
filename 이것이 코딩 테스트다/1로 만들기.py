import sys
sys.stdin = open('./dev/stdin', 'r')
input = sys.stdin.readline

x = int(input())

dp = [0] * 30001

for i in range(2, x + 1):
    candidates = []
    if i % 5 == 0:
        candidates.append(dp[int(i/5)])
    if i % 3 == 0:
        candidates.append(dp[int(i/3)])
    if i % 2 == 0:
        candidates.append(dp[int(i/2)])
    candidates.append(dp[i - 1])
    dp[i] = min(candidates) + 1
    
print(dp[x])