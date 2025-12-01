// https://adventofcode.com/2025/day/1
const input = './testInput';
const file = Bun.file(input);

const text = await file.text();
const turns = text.split('\n');

let dial = 50;
let dialOnZero = 0;

for (let turn of turns) {
	const rotation = turn[0];
	const toRotate = parseInt(turn.substring(1, turn.length));
	
	if (dial == 0 && rotation == 'R') {
		dialOnZero++;
		console.log("count")
	};
	
	if (rotation == 'L') dial -= toRotate;
	else if (rotation == 'R') dial += toRotate;
	
	while (dial < 0 || dial >= 100) {
		if (dial >= 100) dial = dial - 100;
		if (dial < 0) dial = dial + 100;

		dialOnZero++;
		console.log("count")
	}
	console.log(turn, dial)
}

console.log('Solution ', dialOnZero);
