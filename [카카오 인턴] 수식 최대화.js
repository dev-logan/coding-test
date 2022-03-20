const expression = "100-200*300-500+20"

function calculate(expression, priorities, index = 2) {
	const expArray = expression.split(priorities[index])
	let result = isNaN(+expArray[0])
		? calculate(expArray[0], priorities, index - 1)
		: +expArray[0]
	for (let i = 1; i < expArray.length; i++) {
		if (priorities[index] === '*') {
			result *= isNaN(+expArray[i])
				? calculate(expArray[i], priorities, index - 1)
				: +expArray[i]
		} else if (priorities[index] === '+') {
			result += isNaN(+expArray[i])
				? calculate(expArray[i], priorities, index - 1)
				: +expArray[i]
		} else if (priorities[index] === '-') {
			result -= isNaN(+expArray[i])
				? calculate(expArray[i], priorities, index - 1)
				: +expArray[i]
		}
	}
	return result
}

function solution(expression) {
	const results = [
		calculate(expression, ['*', '+', '-']),
		calculate(expression, ['*', '-', '+']),
		calculate(expression, ['+', '*', '-']),
		calculate(expression, ['+', '-', '*']),
		calculate(expression, ['-', '*', '+']),
		calculate(expression, ['-', '+', '*']),
	]
	return Math.max(...results.map(x => Math.abs(x)))
}