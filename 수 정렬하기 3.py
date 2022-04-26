import sys
sys.stdin = open('./dev/stdin', 'r')

n = int(sys.stdin.readline())
count_list = [0] * 10001

for i in range(n):
    count_list[int(sys.stdin.readline())] += 1

for index, count in enumerate(count_list):
    if count == 0:
        continue
    for i in range(count):
        print(index)
