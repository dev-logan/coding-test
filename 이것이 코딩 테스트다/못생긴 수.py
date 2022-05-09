import heapq
import sys
sys.stdin = open('./dev/stdin', 'r')
input = sys.stdin.readline

n = int(input())

dp = [0] * n
heap = [1]

i = 0
while i < n:
    minimum = heapq.heappop(heap)
    if minimum == dp[i - 1]:
        continue
    dp[i] = minimum
    i += 1
    heapq.heappush(heap, minimum * 2)
    heapq.heappush(heap, minimum * 3)
    heapq.heappush(heap, minimum * 5)

print(dp[n - 1])