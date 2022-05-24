# import sys

# sys.stdin = open('../dev/stdin', 'r')

# input = list(map(int, input()))

# result = input[0]

# for i in range(1, len(input)):
#     if input[i] <= 1 or result <= 1:
#         result += input[i]
#     else:
#         result *= input[i]

# print(result)



# 2회
import sys

sys.stdin = open("./dev/stdin", "r")
input = sys.stdin.readline

result = 0
for char in input():
    number = int(char)
    if result <= 1 or number <= 1:
        result += number
    else:
        result *= number

print(result)