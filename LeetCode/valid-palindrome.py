s = "A man, a plan, a canal: Panama"

strs = []
for character in s:
    if character.isalnum():
        strs.append(character.lower())
print(strs == list(reversed(strs)))