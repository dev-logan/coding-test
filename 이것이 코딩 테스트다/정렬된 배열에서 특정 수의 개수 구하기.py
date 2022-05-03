from bisect import bisect_left, bisect_right
import sys
sys.stdin = open('./dev/stdin', 'r')
input = sys.stdin.readline

n, x = map(int, input().split())
array = list(map(int, input().split()))

left = bisect_left(array, x)
right = bisect_right(array, x)

if right - left > 0:
    print(right - left)
else:
    print(-1)