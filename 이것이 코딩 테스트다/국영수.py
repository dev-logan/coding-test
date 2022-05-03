import sys
sys.stdin = open('./dev/stdin', 'r')

n = int(input())
array = []
for i in range(n):
    def to_int(str: str):
        if str.isdigit():
            return int(str)
        else:
            return str
    array.append(list(map(to_int, input().split())))

array.sort(key=lambda x: (-x[1], x[2], -x[3], x[0]))

for name in map(lambda x: x[0], array):
    print(name)
