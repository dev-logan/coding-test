nums = [1,4,3,2]

nums.sort()

answer = 0
for i, num in enumerate(nums):
    if i % 2 == 0:
        answer += num
        
print(answer)