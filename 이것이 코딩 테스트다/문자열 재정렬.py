import sys

sys.stdin = open('./dev/stdin', 'r')

data = list(input())

sum = 0
alphabets = []
for ele in data:
    try:
        sum += int(ele)
    except:
        alphabets.append(ele)

alphabets.sort()

print(''.join(alphabets)+str(sum))
