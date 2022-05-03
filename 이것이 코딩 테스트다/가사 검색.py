from bisect import bisect_left, bisect_right

words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

# 가사 단어 길이 별로 나누기
words_by_length = [[] for _ in range(10001)]
reversed_words_by_length = [[] for _ in range(10001)]
for word in words:
    length = len(word)
    words_by_length[length].append(word)
    reversed_words_by_length[length].append(word[::-1])
for i in range(10001):
    words_by_length[i].sort()
    reversed_words_by_length[i].sort()

result = []
for query in queries:
    if query[0] != '?':
        array = words_by_length[len(query)]
        left = bisect_left(array, query.replace('?', 'a'))
        right = bisect_right(array, query.replace('?', 'z'))
        count = right - left
        result.append(count)
    else:
        query = query[::-1]
        array = reversed_words_by_length[len(query)]
        left = bisect_left(array, query.replace('?', 'a'))
        right = bisect_right(array, query.replace('?', 'z'))
        count = right - left
        result.append(count)

print(result)


#################################################################

# result = []
# for query in queries:
#     length = len(query)
#     conditions = []
#     for i, character in enumerate(query):
#         if character != '?':
#             conditions.append((i, character))

#     count = 0

#     if conditions[0][0] != 0:
#         for word in words:
#             if len(word) != length:
#                 continue
#             check = True
#             for condition in conditions:
#                 i, character = condition
#                 if word[i] != character:
#                     check = False
#                     break
#             if check:
#                 count += 1
#     else:
#         start = 0
#         end = len(words) - 1

#         while start <= end:
#             mid = (start + end) // 2

#             word = words[mid]

#     result.append(count)

# print(result)
