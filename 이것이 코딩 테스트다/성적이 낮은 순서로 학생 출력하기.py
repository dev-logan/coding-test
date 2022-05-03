import sys
sys.stdin = open('./dev/stdin', 'r')

n = int(input())
array = []
for i in range(n):
    array.append(input().split())
print(
    ' '.join(list(map(lambda x: x[0], sorted(array, key=lambda x: int(x[1]))))))
