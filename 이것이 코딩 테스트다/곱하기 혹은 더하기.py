import sys

sys.stdin = open('../dev/stdin', 'r')

input = list(map(int, input()))

result = input[0]

for i in range(1, len(input)):
    if input[i] <= 1 or result <= 1:
        result += input[i]
    else:
        result *= input[i]

print(result)
