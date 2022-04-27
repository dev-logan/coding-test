def separate(w):
    left = 0
    right = 0
    index = 0
    for i, letter in enumerate(w):
        if letter == '(':
            left += 1
        else:
            right += 1

        if left > 0 and right > 0 and left == right:
            index = i
            break

    u = w[0:index+1]
    v = w[index+1:]

    return u, v


def is_right(u):
    stack = []
    for letter in u:
        if len(stack) == 0:
            stack.append(letter)
            continue
        if stack[-1] == '(' and letter == ')':
            stack.pop()
        else:
            stack.append(letter)
    if len(stack) == 0:
        return True
    else:
        return False


def solution(p):
    if p == '':
        return ''
    u, v = separate(p)
    if is_right(u):
        return u + solution(v)
    else:
        temp = '(' + solution(v) + ')'
        nu = ''
        for letter in u[1:-1]:
            if letter == '(':
                nu += ')'
            else:
                nu += '('
        return temp + nu
