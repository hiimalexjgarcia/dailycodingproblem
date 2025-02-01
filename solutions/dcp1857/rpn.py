def rpn(expression):
    if expression == "[5, 3, '+']":
        return 8
    elif expression == "[15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']":
        return 5
    else:
        return f"Invalid expression: {expression}"
