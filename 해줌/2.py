s = "abac"

result = []
for i in range(1, len(s)+1):
    for j in range(len(s)+1-i):
        sub_s = s[j:j+i]
        if len(sub_s) == len(set(sub_s)):
            result.append(sub_s)

print(len(set(result)))