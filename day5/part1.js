const input = './input';
const file = Bun.file(input);

const text = await file.text();

const completeList = text.split("\n");
const splitPoint = completeList.findIndex((v) => v == "");

const freshIngredients = completeList.slice(0, splitPoint);
const ingredients = completeList.slice(splitPoint + 1, completeList.length)

const freshIds = [];
for(let range of freshIngredients) {
	const parts = range.split("-");
	freshIds.push([parseInt(parts[0]), parseInt(parts[1])]);
}

let stillFresh = 0;
for(let ingredient of ingredients) {
	let isFresh = false;
	for(let idRange of freshIds) {
		if(ingredient >= idRange[0] && ingredient <= idRange[1]) isFresh = true;
	}

	if(isFresh) stillFresh++;
}

console.log(stillFresh);