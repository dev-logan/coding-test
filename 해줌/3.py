# foods = [4,1]

# total = sum(foods)
# target = total / 3

# # if total % 3 != 0:
# #     return 0

# n = len(foods)

# count = 0
# for i in range(1, n-1):
#     for j in range(1, n-i):
#         one = sum(foods[0:i])
#         two = sum(foods[i:i+j])
#         if one == target and two == target:
#             count += 1

# print(count)


########################################

# def solution(foods):
#     total = sum(foods)
#     target = total / 3

#     if total % 3 != 0:
#         return 0

#     sub_sum = 0
#     count = 0
#     result = 1
#     for food in foods:
#         sub_sum += food


#     return result

# foods = [1,2,3,0,3]
# print(solution(foods))


########################################


foods = [3, 3, 3]


def solution(foods):
    n = len(foods)
    total = sum(foods)
    target = total / 3

    if total % 3 != 0:
        return 0

    subtotal_1 = 0
    count = 0
    for i, food in enumerate(foods):
        subtotal_1 += food
        if subtotal_1 == target:
            subtotal_2 = 0
            for j in range(i+1, n-1):
                subtotal_2 += foods[j]
                if subtotal_2 == target:
                    count += 1

    return count


print(solution(foods))
