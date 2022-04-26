import sys

sys.stdin = open('./dev/stdin', 'r')

x_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8}

coord = input()
x = x_dict[coord[0]]
y = int(coord[1])

dx = [-2, -2, -1, -1, 1, 1, 2, 2]
dy = [1, -1, 2, -2, 2, -2, 1, -1]

count = 0

for i in range(8):
    new_x = x + dx[i]
    new_y = y + dy[i]

    if 1 <= new_x <= 8 and 1 <= new_y <= 8:
        count += 1

print(count)
