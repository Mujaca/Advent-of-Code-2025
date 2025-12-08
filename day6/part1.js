const input = './input';
const file = Bun.file(input);

const text = await file.text();

const lines = text.split('\n');
const operations = lines.map((line) => {
	return line.split(' ').filter((value) => value !== '');
});

let totalSum = 0;

for (let i = 0; i < operations[0].length; i++) {
	const operator = operations[operations.length - 1][i];

	const numbers = [];
	for (let j = 0; j < operations.length - 1; j++) {
		numbers.push(operations[j][i]);
	}

	let sum = 0;
	switch (operator) {
		case '*':
			if(sum == 0) sum = 1;
			for (let number of numbers) sum *= parseInt(number);
			break;
		case '+':
			for (let number of numbers) sum += parseInt(number);
			break;
	}

	totalSum += sum
}

console.log(totalSum)