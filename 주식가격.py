# https://programmers.co.kr/learn/courses/30/lessons/42584

def solution(prices):
    answer = []
    for idx, val in enumerate(prices):
      find = False
      for i in range(idx+1,len(prices)):
        if prices[i] < val:
          answer.append(i-idx)
          find = True
          break
      if find:
        continue
      answer.append(len(prices) - idx - 1)

    return answer
