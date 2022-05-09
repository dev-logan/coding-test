# import heapq

# stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1]
# k = 3

# def check_pass(stones, k):
#     count = 0
#     possible = True
#     for stone in stones:
#         if stone == 0:
#             count += 1
#             if count >= k:
#                possible = False
#                break 
#         else:
#             count = 0
#     if possible:
#         return True
#     else:
#         return False

# heap = []
# for stone in set(stones):
#     heapq.heappush(heap, stone)

# people_count = 0
# while True:
#     if not check_pass(stones, k):
#         break
#     value = heapq.heappop(heap) - people_count
#     people_count += value
#     for i in range(len(stones)):
#         stones[i] -= value
#         if stones[i] < 0:
#             stones[i] = 0

# print(people_count)




###########################################################

stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1]
k = 3

start = 1
end = 2000000000

answer = 0
while start <= end:
    mid = (start + end) // 2
    
    count = 0
    possible = True
    for stone in stones:
        if stone - mid <= 0:
            count += 1
            if count >= k:
                possible = False
                break
        else:
            count = 0
        
    if possible:
        start = mid + 1
        answer = start
    else:
        end = mid - 1
        
print(answer)