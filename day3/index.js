const input = './input';
const file = Bun.file(input);

const text = await file.text();
const batteryBanks = text.split('\n');

let totalJoltage = 0;

for (let batteryBank of batteryBanks) {
	let batteries = '';
	
	// First loop to check from front to back
	for (let i = 0; i < batteryBank.length; i++) {
		const currentBattery = batteryBank[i];

		while (batteries.length > 0) {
			const leftBattery = batteries[batteries.length - 1];

			if (leftBattery < currentBattery && batteryBank.length - i - 1 + 1 >= 12 - (batteries.length - 1)) {
				batteries = batteries.substring(0, batteries.length - 1);
			} else {
				break;
			}
		}

		if (batteries.length < 12) {
			batteries += currentBattery;
		}
	}

	totalJoltage += parseInt(batteries);
}

console.log(totalJoltage);