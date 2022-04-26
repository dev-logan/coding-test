import sys

sys.stdin = open('./dev/stdin', 'r')

score = input()
length = len(score)
front = score[0:int(length/2)]
back = score[int(length/2):]

if sum([int(c) for c in front]) == sum([int(c) for c in back]):
    print('LUCKY')
else:
    print('READY')
