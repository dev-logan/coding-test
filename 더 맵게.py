# https://programmers.co.kr/learn/courses/30/lessons/42626

from heapq import heappush, heappop

def solution(scoville, K):
    sorted_s = []
    for s in scoville:
        heappush(sorted_s, s)

    cnt = 0
    while True:
        first = heappop(sorted_s)
        if first >= K:
            break
        second = heappop(sorted_s)

        new = first + second * 2

        heappush(sorted_s, new)
        cnt += 1

        if (len(sorted_s) == 1) & (sorted_s[0] < K):
            return -1

    return cnt
