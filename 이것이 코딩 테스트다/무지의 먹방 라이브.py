# import heapq


# def solution(food_times, k):
#     if sum(food_times) <= k:
#         return -1

#     q = []
#     for i in range(len(food_times)):
#         heapq.heappush(q, (food_times[i], i+1))

#     sum_value = 0
#     previous = 0
#     length = len(food_times)

#     while sum_value + (q[0][0] - previous) * length <= k:
#         now = heapq.heappop(q)[0]
#         sum_value += (now - previous) * length
#         length -= 1
#         previous = now

#     result = sorted(q, key=lambda x: x[1])
#     return result[(k-sum_value) % length][1]


# print(solution([8, 6, 4], 15))


# 2회
import heapq

food_times = [3, 1, 2]
k = 5

q = []
for i, food in enumerate(food_times):
    heapq.heappush(q, (food, i + 1))
    
time = 0    
previous = 0
while True:
    length = len(q)
    pop = heapq.heappop(q)
    time += length * (pop[0] - previous)
    
    if time > k:
        time -= length * (pop[0] - previous)
        heapq.heappush(q, pop)
        break

    previous = pop[0]

q.sort(key=lambda x: x[1])

print(q[(k - time) % len(q)][1])