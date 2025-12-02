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
		// clean split in the middle, because should work
		const split = [id.substring(0, id.length / 2), id.substring(id.length / 2, id.length)];

		return split[0] == split[1];
	}).forEach((invalidId) => sum += parseInt(invalidId));
}

console.log(sum)