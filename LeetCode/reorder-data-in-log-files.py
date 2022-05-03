logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6",
        "let2 own kit dig", "let3 art zero"]

letters, digits = [], []
for log in logs:
    splited_log = log.split()
    if splited_log[1].isdigit():
        digits.append(splited_log)
    else:
        letters.append(splited_log)

print(list(map(lambda x: ' '.join(x), sorted(letters, key=lambda x: (
    x[1:], x[0])))) + list(map(lambda x: ' '.join(x), digits)))
