const input = './input';
const file = Bun.file(input);

const text = await file.text();
const idRanges = text.split(",").map((idPair) => idPair.split("-"));

let sum = 0;

for (let idRange of idRanges) {
	const allIds = [];

	const rangeStart = idRange[0];
	const rangeEnd = idRange[1];

	// Handle later? -> as far as I've seen, no leading number has 0, so decided I dont care right now 
	// if(rangeStart[0] !== 0 || rangeEnd[0] !== 0);

	for(let i = parseInt(rangeStart); i <= parseInt(rangeEnd); i++) {
		allIds.push(i.toString())
	}

	allIds.filter((id) => {
	// get all possible splits, capped at half
	for(let i = 1; i < id.length; i++) {
		const splits = [];
		
		for(let j = 0; j < id.length; j += i) {
			splits.push(id.substring(j, j + i));
		}
		if(splits.length == 1) continue;

		if(splits.every(split => split == splits[0])) {
			return true
		}; 
	};
		
	return false;

	}).forEach((invalidId) => sum += parseInt(invalidId));
}

console.log(sum)