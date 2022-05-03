arr = [4,4,4,3,3]

stack = []
for ele in arr:
    if len(stack) == 0 or stack[-1] != ele:
        stack.append(ele)

print(stack)