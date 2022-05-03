import sys
sys.stdin = open('./dev/stdin', 'r')

n = int(input())
array = []
for i in range(n):
    array.append(int(input()))
for num in sorted(array, reverse=True):
    print(num, end=' ')
