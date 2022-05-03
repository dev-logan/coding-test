# import sys
# sys.stdin = open('./dev/stdin', 'r')

# n = int(input())
# sort_array = [0] * 100001
# houses = map(int, input().split())
# for num in houses:
#     sort_array[num] += 1

# total_count = 0
# antenna = 0
# for i, count in enumerate(sort_array):
#     total_count += count
#     if total_count >= n / 2:
#         antenna = i
#         break

# print(antenna)


##########################################

import sys
sys.stdin = open('./dev/stdin', 'r')

n = int(input())
houses = list(map(int, input().split()))

houses.sort()

print(houses[(n-1)//2])
