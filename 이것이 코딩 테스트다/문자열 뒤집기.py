import math
import sys
sys.stdin = open('./dev/stdin', 'r')

input = input()
previous = input[0]
count = 0

for i in range(1, len(input)):
    if previous != input[i]:
        count += 1
        previous = input[i]

print(math.ceil(count/2))
