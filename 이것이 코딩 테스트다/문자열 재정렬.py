# import sys

# sys.stdin = open('./dev/stdin', 'r')

# data = list(input())

# sum = 0
# alphabets = []
# for ele in data:
#     try:
#         sum += int(ele)
#     except:
#         alphabets.append(ele)

# alphabets.sort()

# print(''.join(alphabets)+str(sum))


# 2회
import sys

sys.stdin = open("./dev/stdin", "r")

alphas = []
total = 0
for char in input():
    if char.isalpha():
        alphas.append(char)
    else:
        total += int(char)

alphas.sort()

print("".join(alphas) + str(total))
