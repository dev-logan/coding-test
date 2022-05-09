nums = [2, 7, 11, 15]
target = 9

# n = len(nums)

# for i in range(n - 1):
#     for j in range(i + 1, n):
#         if nums[i] + nums[j] == target:
#             print([i, j])

# for i, n in enumerate(nums):
#     complement = target - n
#     if complement in nums[i + 1:]:
#         print([nums.index(n), nums[i + 1:].index(complement) + (i + 1)])

nums_map = {}
for i, num in enumerate(nums):
    nums_map[num] = i
for i, num in enumerate(nums):
    if target - num in nums_map and i != nums_map[target - num]:
        print([i, nums_map[target - num]])

nums_map = {}
for i, num in enumerate(nums):
    if target - num in nums_map:
        print([nums_map[target - num], i])
    nums_map[num] = i
    
