import sys
sys.stdin = open('./dev/stdin', 'r')
input = sys.stdin.readline

n, c = map(int, input().split())
array = []
for _ in range(n):
    array.append(int(input()))

array.sort()

# 적절한 max_distance 찾기
start = 0
end = 1000000000

def count_func(array, mid):
    count = 1
    init = array[0] + mid
    for house in array:
        if house >= init:
            count += 1
            init = house + mid
    return count        
        
result = 0

while start <= end:
    mid = (start + end) // 2
    
    # 공유기가 mid 만큼의 거리만큼 떨어져서 설치된다면 몇 개를 설치 할 수 있을까?
    count = count_func(array, mid)
    
    if count >= c:
        result = mid
        start = mid + 1
    else:
        end = mid - 1
        
print(result)