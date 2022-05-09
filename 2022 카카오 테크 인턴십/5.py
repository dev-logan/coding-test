from collections import deque

rc = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
operations = ["ShiftRow", "Rotate", "ShiftRow", "Rotate"]


def shift_row(rc):
    n = len(rc)
    new = [0] * n
    for i in range(n):
        if i == 0:
            new[i] = rc[-1]
            continue
        new[i] = rc[i - 1]

    return new


def rotate(rc):
    n = len(rc)
    m = len(rc[0])

    new = [[0] * m for _ in range(n)]

    array1 = rc[0]
    array3 = rc[-1]
    array2 = []
    array4 = []
    for i in range(n):
        array2.append(rc[i][-1])
        array4.append(rc[i][0])
    
    

    # for i in range(n):
    #     for j in range(m):
    #         if i == 0:
    #             if j == 0:
    #                 new[i][j] = rc[i+1][j]
    #             else:
    #                 new[i][j] = rc[i][j-1]
    #         elif i == n - 1:
    #             if j == m - 1:
    #                 new[i][j] = rc[i-1][j]
    #             else:
    #                 new[i][j] = rc[i][j+1]
    #         else:
    #             if j == 0:
    #                 new[i][j] = rc[i+1][j]
    #             elif j == m - 1:
    #                 new[i][j] = rc[i-1][j]
    #             else:
    #                 new[i][j] = rc[i][j]

    return new


rc_queue = deque(rc)

for operation in operations:
    if operation == 'ShiftRow':
        pop = rc_queue.pop()
        rc_queue.appendleft(pop)
        rc = list(rc_queue)
    if operation == 'Rotate':
        rc = rotate(rc)
        rc_queue = deque(rc)
print(rc)