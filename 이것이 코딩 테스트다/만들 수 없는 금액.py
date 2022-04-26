import sys
sys.stdin = open('./dev/stdin', 'r')

n = int(input())
coins = list(map(int, input().split()))

coins.sort()

target = 1

for coin in coins:
    if coin <= target:
        target += coin
    else:
        break

print(target)
