key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]]
lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]


def rotate_90(key):
    m = len(key)
    new_key = [[0] * m for _ in range(m)]
    for y in range(m):
        for x in range(m):
            new_key[y][x] = key[m-x-1][y]
    return new_key


def lock_open(lock):
    length = len(lock)
    check = True
    for y in range(int(length/3), int(length/3*2)):
        for x in range(int(length/3), int(length/3*2)):
            if lock[y][x] != 1:
                check = False
    return check


def solution(key, lock):
    m = len(key)
    n = len(lock)

    new_lock = [[0] * (3*n) for _ in range(3*n)]

    for y in range(n):
        for x in range(n):
            new_lock[y+n][x+n] = lock[y][x]

    for rotation in range(4):
        key = rotate_90(key)
        # key의 위치 설정
        for y in range(2*n):
            for x in range(2*n):
                for i in range(m):
                    for j in range(m):
                        new_lock[y + i][x + j] += key[i][j]
                if lock_open(new_lock):
                    return True
                else:
                    for i in range(m):
                        for j in range(m):
                            new_lock[y + i][x + j] -= key[i][j]
    return False

print(solution(key, lock))