import sys

sys.stdin = open('./dev/stdin', 'r')

n, m = map(int, input().split())
balls = list(map(int, input().split()))

count = 0

for i in range(n):
    for j in range(i + 1, n):
        if balls[i] == balls[j]:
            continue
        count += 1

print(count)
