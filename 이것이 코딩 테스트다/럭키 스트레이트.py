# import sys

# sys.stdin = open('./dev/stdin', 'r')

# score = input()
# length = len(score)
# front = score[0:int(length/2)]
# back = score[int(length/2):]

# if sum([int(c) for c in front]) == sum([int(c) for c in back]):
#     print('LUCKY')
# else:
#     print('READY')


# 2회
import sys

sys.stdin = open("./dev/stdin", "r")

string = input()
n = len(string)
half = int(n / 2)

left = 0
right = 0
for i, char in enumerate(string):
    if i < half:
        left += int(char)
    else:
        right += int(char)

if left == right:
    print("LUCKY")
else:
    print("READY")
