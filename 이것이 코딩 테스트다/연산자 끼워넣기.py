from itertools import permutations
import sys
sys.stdin = open('./dev/stdin', 'r')

n = int(input())
a = list(map(int, input().split()))
counts = list(map(int, input().split()))

operators = ['+', '-', '*', '/']
all_operators = []

for i, count in enumerate(counts):
    for _ in range(count):
        all_operators.append(operators[i])

results = []
for perm in permutations(all_operators, n-1):
    result = a[0]
    for index, operator in enumerate(perm):
        if operator == '/':
            result = result // a[index+1] if result >= 0 else - \
                ((-result) // a[index+1])
        if operator == '*':
            result *= a[index+1]
        if operator == '-':
            result -= a[index+1]
        if operator == '+':
            result += a[index+1]
    results.append(result)

print(max(results))
print(min(results))
