# s = "abcabcabcabcdededededede"

# max_compress_length = len(s) // 2

# compressed_lengths = []

# for compress_length in range(1, max_compress_length + 1):
#     splited_s = []
#     index = 0
#     while index < len(s):
#         splited_s.append(s[index : index + compress_length])
#         index += compress_length

#     previous = ""
#     count = 1
#     compressed = []
#     for index, string in enumerate(splited_s):
#         if string != previous:
#             if count != 1:
#                 compressed.append(count)
#             if previous != "":
#                 compressed.append(previous)
#             previous = string
#             count = 1
#         else:
#             count += 1
#         if index == len(splited_s) - 1:
#             if count != 1:
#                 compressed.append(count)
#             compressed.append(previous)
#     compressed_lengths.append(len("".join(list(map(str, compressed)))))

# print(min(compressed_lengths))


# def solution(s):
#     if len(s) == 1:
#         return 1

#     max_compress_length = len(s) // 2

#     compressed_lengths = []

#     for compress_length in range(1, max_compress_length + 1):
#         splited_s = []
#         index = 0
#         while index < len(s):
#             splited_s.append(s[index : index + compress_length])
#             index += compress_length

#         previous = ""
#         count = 1
#         compressed = []
#         for index, string in enumerate(splited_s):
#             if string != previous:
#                 if count != 1:
#                     compressed.append(count)
#                 if previous != "":
#                     compressed.append(previous)
#                 previous = string
#                 count = 1
#             else:
#                 count += 1
#             if index == len(splited_s) - 1:
#                 if count != 1:
#                     compressed.append(count)
#                 compressed.append(previous)
#         compressed_lengths.append(len("".join(list(map(str, compressed)))))

#     return min(compressed_lengths)



# 2
s = "abcabcabcabcdededededede"

length = len(s)
max_compress = length // 2

answer = int(1e9)
for compress in range(1, max_compress + 1):
    i = 0
    splited_s = []
    while i < length:
        splited_s.append(s[i:i+compress])
        i += compress
    
    previous = splited_s[0]
    count = 1
    compressed_string = ''
    for i in range(1, len(splited_s)):
        if splited_s[i] != previous:
            compressed_string += str(count) + previous if count > 1 else previous
            count = 1
            previous = splited_s[i]
        else:
            count += 1
    compressed_string += str(count) + previous if count > 1 else previous
            
    answer = min(answer, len(compressed_string))
    
print(answer)