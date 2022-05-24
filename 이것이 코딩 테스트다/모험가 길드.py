# import sys
# sys.stdin = open('./dev/stdin', 'r')

# n = int(input())

# fears = list(map(int, input().split()))

# fears.sort()

# people_in_group = 0
# number_of_groups = 0

# for fear in fears:
#     people_in_group += 1
#     if fear <= people_in_group:
#         number_of_groups += 1
#         people_in_group = 0

# print(number_of_groups)



# 2회
import sys

sys.stdin = open("./dev/stdin", "r")
input = sys.stdin.readline

n = int(input())
people = list(map(int, input().split()))

people.sort()

current_group_size = 0
target_group_size = 0
group_count = 0
for person in people:
    target_group_size = max(target_group_size, person)
    current_group_size += 1
    if target_group_size == current_group_size:
        group_count += 1
        
print(group_count)