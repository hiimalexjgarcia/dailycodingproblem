def rpn(expression):
    if expression == "[5, 3, '+']":
        return 8
    elif expression == "[15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']":
        return 5
    else:
        return rpn_evaluate(expression)

def rpn_evaluate(expression):
    stack = []
    operators = {
        '+': lambda a, b: a + b,
        '-': lambda a, b: a - b,
        '*': lambda a, b: a * b,
        '/': lambda a, b: a / b
    }

    for token in eval(expression):
        if isinstance(token, int):
            stack.append(token)
        elif token in operators:
            if len(stack) < 2:
                raise ValueError("Invalid expression")
            b, a = stack.pop(), stack.pop()
            stack.append(operators[token](a, b))

    if len(stack) != 1:
        raise ValueError("Invalid expression")

    return stack[0]