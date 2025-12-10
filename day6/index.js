const input = './input';
const file = Bun.file(input);

const text = await file.text();

const lines = text.split('\n');
const problems = [];

let currentProblem = [];
for(let i = 0; i <= lines[0].length; i++) {
	
	let rows = [];
	for(let j = 0; j < lines.length; j++) {
		if(lines[j][i] == "*" || lines[j][i] == "+") {
			currentProblem.push(lines[j][i])
			continue;
		}

		rows.push(lines[j][i]);
	}

	const number = rows.filter(v => v !== " ").join("");
	if(number !== "") currentProblem.unshift(number)

	if(rows.every(v => v == " ")) {
		problems.push(currentProblem);
		currentProblem = [];
		continue;
	}
}
problems.push(currentProblem);

let totalSum = 0;

for (let i = 0; i < problems.length; i++) {
	let currentProblem = problems[i];
	const operator = currentProblem[currentProblem.length - 1];
	currentProblem.splice(currentProblem.length - 1, 1);

	let sum = 0;
	switch (operator) {
		case '*':
			if(sum == 0) sum = 1;
			for (let number of currentProblem) sum *= parseInt(number);
			break;
		case '+':
			for (let number of currentProblem) sum += parseInt(number);
			break;
	}

	totalSum += sum
}

console.log(totalSum)