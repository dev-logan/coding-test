import sys
sys.stdin = open('./dev/stdin', 'r')
input = sys.stdin.readline

n = int(input())
inventory = list(map(int, input().split()))
m = int(input())
parts = list(map(int, input().split()))

def binary_search(array, target, start, end):
    if start > end:
        return None
    mid = (start + end) // 2
    if array[mid] == target:
        return mid
    elif array[mid] > target:
        return binary_search(array, target, start, mid - 1)
    else:
        return binary_search(array, target, mid + 1, end)

for part in parts:
    result = binary_search(inventory, part, 0, n - 1)
    if result == None:
        print('no', end=' ')
    else:
        print('yes', end=' ')