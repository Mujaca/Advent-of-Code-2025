const input = './input';
const file = Bun.file(input);

const text = await file.text();
const grid = text.split('\n').map((column) => column.split(''));

let valid = 0;

for (let i = 0; i < grid.length; i++) {
	const column = grid[i];

	for (let j = 0; j < column.length; j++) {
		const space = column[j];
		if (space === '.') continue;

		const neighbours = [];

		if (grid[i - 1] !== undefined) neighbours.push(...[grid[i - 1][j - 1], grid[i - 1][j], grid[i - 1][j + 1]]);
		if (grid[i] !== undefined) neighbours.push(...[grid[i][j - 1], null, grid[i][j + 1]]);
		if (grid[i + 1] !== undefined) neighbours.push(...[grid[i + 1][j - 1], grid[i + 1][j], grid[i + 1][j + 1]]);

		const count = neighbours.filter((e) => e == '@').length;
		if (count < 4) valid++;
	}
}

console.log(valid);
