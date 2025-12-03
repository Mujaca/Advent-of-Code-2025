const input = './input';
const file = Bun.file(input);

const text = await file.text();
const batteryBanks = text.split("\n");

let totalJoltage = 0;

for(let batteryBank of batteryBanks) {
	let highest = 0;
	// First loop to check from front to back
	for(let i = 0; i < batteryBank.length; i++) {
		const firstBattery = batteryBank[i];

		// j = i + 1, because the order is fixed, so no need to check previous batteries
		for(let j = i + 1; j < batteryBank.length; j++) {
			const secondBattery = batteryBank[j];
			const joltage = parseInt(firstBattery + secondBattery);

			if(joltage > highest) highest = joltage;
		}
	}

	totalJoltage += highest;
}

console.log(totalJoltage)