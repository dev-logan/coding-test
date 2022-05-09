strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

# modified_strs = list(map(lambda x: ''.join(sorted(list(x))), strs))

# set_strs = set(map(lambda x: ''.join(sorted(list(x))), strs))

# results = []
# for ss in set_strs:
#     result = []
#     for i, ms in enumerate(modified_strs):
#         if ss == ms:
#             result.append(strs[i])
#     results.append(result)
# print(results)

###################

import collections

anagrams = collections.defaultdict(list)

for word in strs:
    anagrams[''.join(sorted(word))].append(word)
    
print(list(anagrams.values()))