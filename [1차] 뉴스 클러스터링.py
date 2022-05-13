from collections import Counter

str1 = "E=M*C^2"
str2 = "e=m*c^2"


def split_two(str):
    array = []
    n = len(str)
    for i in range(n - 1):
        substr = str[i : i + 2]
        if not substr.isalpha():
            continue
        array.append(substr.lower())
    return array


def jaccard(a, b):
    if len(a) == 0 and len(b) == 0:
        return 65536
    
    a_counter = Counter(a)
    b_counter = Counter(b)

    intersection = {}
    for key in a_counter.keys():
        if key in b_counter.keys():
            intersection[key] = min(a_counter[key], b_counter[key])

    intersection_num = sum(intersection.values())
    return int((intersection_num / (len(a) + len(b) - intersection_num)) * 65536)


set1 = split_two(str1)
set2 = split_two(str2)

print(jaccard(set1, set2))