import heapq
import sys
sys.stdin = open('./dev/stdin', 'r')
input = sys.stdin.readline

n = int(input())
heap = []
for i in range(n):
    heapq.heappush(heap, int(input()))

total = 0

while len(heap) > 1:
    first = heapq.heappop(heap)
    second = heapq.heappop(heap)

    total += first + second
    heapq.heappush(heap, first + second)
    
print(total)