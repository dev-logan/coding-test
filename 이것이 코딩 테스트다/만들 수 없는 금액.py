# import sys
# sys.stdin = open('./dev/stdin', 'r')

# n = int(input())
# coins = list(map(int, input().split()))

# coins.sort()

# target = 1

# for coin in coins:
#     if coin <= target:
#         target += coin
#     else:
#         break

# print(target)



# 2회
import sys

sys.stdin = open("./dev/stdin", "r")
input = sys.stdin.readline

n = int(input())
array = list(map(int, input().split()))

array.sort()

available_max = 0
for coin in array:
    if coin > available_max + 1:
        break
    available_max += coin

print(available_max + 1)