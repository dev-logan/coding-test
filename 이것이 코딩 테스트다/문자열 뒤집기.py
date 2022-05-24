# import math
# import sys
# sys.stdin = open('./dev/stdin', 'r')

# input = input()
# previous = input[0]
# count = 0

# for i in range(1, len(input)):
#     if previous != input[i]:
#         count += 1
#         previous = input[i]

# print(math.ceil(count/2))



# 2회
import sys

sys.stdin = open("./dev/stdin", "r")
input = sys.stdin.readline

array = list(input().rstrip())

count = 0
for i in range(1, len(array)):
    if array[i] != array[i - 1]:
        count += 1

print(int(count / 2) if count % 2 == 0 else count // 2 + 1)