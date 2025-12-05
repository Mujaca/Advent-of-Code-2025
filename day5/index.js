const input = './input';
const file = Bun.file(input);

const text = await file.text();

const completeList = text.split("\n");
const splitPoint = completeList.findIndex((v) => v == "");

const freshIngredients = completeList.slice(0, splitPoint)
.map((range) => {
	const rangeSplit = range.split("-");
	return [parseInt(rangeSplit[0]), parseInt(rangeSplit[1])]
})
.sort((rangeOne, rangeTwo) => {
	const startOne = parseInt(rangeOne[0]);
	const startTwo = parseInt(rangeTwo[0]);
	if(startOne !== startTwo) return startOne - startTwo;

	return parseInt(rangeOne[1]) - parseInt(rangeTwo[1])
});


const sortedRanges = [];
for(const rangeSplit of freshIngredients) {
	let start = parseInt(rangeSplit[0]);
	let end = parseInt(rangeSplit[1]);

	const previousRange = sortedRanges[sortedRanges.length - 1];
	if(!previousRange) {
		sortedRanges.push(rangeSplit)
		continue;
	}

	if(start >= previousRange[0] && start <= previousRange[1]) {
		if(end >= previousRange[1]) previousRange[1] = end
		continue;
	}

	sortedRanges.push(rangeSplit)
}

let totalFresh = 0;
for(let range of sortedRanges) {
	totalFresh += (range[1] - range[0]) + 1
}

console.log(totalFresh);