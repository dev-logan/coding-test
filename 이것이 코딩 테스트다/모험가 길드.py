import sys
sys.stdin = open('./dev/stdin', 'r')

n = int(input())

fears = list(map(int, input().split()))

fears.sort()

people_in_group = 0
number_of_groups = 0

for fear in fears:
    people_in_group += 1
    if fear <= people_in_group:
        number_of_groups += 1
        people_in_group = 0

print(number_of_groups)