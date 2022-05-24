A = "00:00"
B = "23:59"

starts = list(range(0, 23 * 60 + 46, 15))


def to_minutes(string):
    hour, minute = map(int, string.split(":"))
    return hour * 60 + minute


a = to_minutes(A)
b = to_minutes(B)

count = 0
for start in starts:
    if a > b:
        if a <= start:
            count += 1
        if start <= (b - 15):
            count += 1
    elif a <= start <= (b - 15):
        count += 1

print(count)
