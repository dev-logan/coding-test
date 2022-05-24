n = 110011
k = 10


def base_conversion(n, k):
    result = ""

    while n > 0:
        n, base = divmod(n, k)
        result += str(base)

    return result[::-1]


string = base_conversion(n, k)

def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

count = 0
for num in string.split("0"):
    if not num.isdigit():
        continue
    if is_prime(int(num)):
        count += 1

print(count)