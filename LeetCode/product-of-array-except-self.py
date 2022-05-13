nums = [-1, 1, 0, -3, 3]

answer = []

n = len(nums)

p = 1
for i in range(n):
    answer.append(p)
    p *= nums[i]
    
p = 1
for i in range(n - 1, -1, -1):
    answer[i] *= p
    p *= nums[i]
    
print(answer)
