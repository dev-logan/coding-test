from collections import deque

queue1 = [1, 1]
queue2 = [1, 5]

target = int((sum(queue1) + sum(queue2)) / 2)

dequeue1 = deque(queue1)
dequeue2 = deque(queue2)

sum1 = sum(queue1)

count = 0
possible = True
while True:
    if sum1 < target:
        pop = dequeue2.popleft()
        dequeue1.append(pop)
        sum1 += pop
        count += 1
    elif sum1 > target:
        pop = dequeue1.popleft()
        dequeue2.append(pop)
        sum1 -= pop
        count += 1
    else:
        break
    
    if list(dequeue1) == queue2:
        possible = False
        break

if possible:
    print(count)
else:
    print(-1)